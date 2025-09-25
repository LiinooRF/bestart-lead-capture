import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadSubmissionRequest {
  name: string;
  email: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting lead submission process...');

    const { name, email, phone }: LeadSubmissionRequest = await req.json();

    // Validate required fields
    if (!name || !email || !phone) {
      console.error('Missing required fields:', { name, email, phone });
      return new Response(JSON.stringify({ 
        error: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Processing lead submission for:', email);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get user's IP and User Agent
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Save lead to database
    console.log('Saving lead to database...');
    const { data: leadData, error: dbError } = await supabase
      .from('leads')
      .insert([{
        name,
        email,
        phone,
        ip_address: clientIP,
        user_agent: userAgent
      }])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(JSON.stringify({ 
        error: 'Error al guardar los datos' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Lead saved successfully:', leadData.id);

    // Get environment variables for Mailgun
    const MAILGUN_API_KEY = Deno.env.get('MAILGUN_API_KEY');
    const MAILGUN_DOMAIN = Deno.env.get('MAILGUN_DOMAIN');
    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL');

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !ADMIN_EMAIL) {
      console.error('Missing Mailgun configuration');
      return new Response(JSON.stringify({ 
        error: 'Configuración de correo incompleta' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Prepare emails
    console.log('Preparing emails...');

    // Google Drive links
    const googleDriveLinks = [
      {
        title: "7 Claves para Vender Bien tu Propiedad",
        url: "https://drive.google.com/file/d/1OJoIfiw6wQsxWpPI9AnlHNKMGaqdTr02/view?usp=drive_link"
      }
    ];

    // Email to user with PDF links
    const userEmailHtml = `
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #0D0D0D; color: #2E2E2E;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Bestart branding -->
            <div style="background-color: #0D0D0D; padding: 50px 30px; text-align: center; position: relative;">
              <!-- Logo section -->
              <div style="margin-bottom: 30px;">
                <div style="background-color: #F2C94C; display: inline-block; padding: 20px 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(242, 201, 76, 0.3);">
                  <h1 style="margin: 0; color: #0D0D0D; font-size: 28px; font-weight: 800; letter-spacing: 3px;">BESTART</h1>
                </div>
              </div>
              <!-- Welcome message -->
              <div style="max-width: 500px; margin: 0 auto;">
                <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 32px; font-weight: 700; line-height: 1.2;">¡Hola ${name}!</h2>
                <p style="margin: 0; color: #F2C94C; font-size: 18px; font-weight: 500; opacity: 0.9;">Tu e-book gratuito está listo para descargar</p>
              </div>
              <!-- Decorative element -->
              <div style="position: absolute; top: 20px; right: 30px; font-size: 40px; opacity: 0.1;">📚</div>
              <div style="position: absolute; bottom: 20px; left: 30px; font-size: 40px; opacity: 0.1;">🏠</div>
            </div>
            
            <!-- Main content -->
            <div style="padding: 40px 30px;">
              <p style="font-size: 18px; line-height: 1.6; color: #2E2E2E; margin-bottom: 20px;">
                Hola <strong>${name}</strong>,
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #2E2E2E; margin-bottom: 30px;">
                Te agradecemos tu interés en nuestro contenido. Como prometimos, hemos enviado a tu Google Drive el acceso a nuestros recursos gratuitos:
              </p>
              
              <!-- Resource card -->
              <div style="background: linear-gradient(145deg, #ffffff, #fef7e0); border: 2px solid #F2C94C; border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center; box-shadow: 0 8px 32px -8px rgba(242, 201, 76, 0.6);">
                ${googleDriveLinks.map(link => `
                  <div style="margin-bottom: 20px;">
                    <div style="font-size: 48px; margin-bottom: 15px;">📚</div>
                    <h3 style="color: #0D0D0D; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">${link.title}</h3>
                    <p style="color: #2E2E2E; font-size: 14px; margin-bottom: 20px;">El enlace ha sido enviado a tu Google Drive</p>
                    <a href="${link.url}" style="display: inline-block; background: linear-gradient(135deg, #F2C94C, #f7d464); color: #0D0D0D; text-decoration: none; font-weight: 600; padding: 15px 30px; border-radius: 8px; font-size: 16px; transition: all 0.3s ease;">
                      📥 Acceder al Google Drive →
                    </a>
                  </div>
                `).join('')}
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #2E2E2E; margin-bottom: 30px;">
                Esperamos que este contenido te sea de gran utilidad. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
              </p>
              
              <!-- Contact info -->
              <div style="background-color: #fef7e0; padding: 25px; border-radius: 8px; text-align: center; margin-top: 40px;">
                <p style="color: #2E2E2E; font-size: 16px; margin: 0 0 10px 0;">
                  <strong style="color: #0D0D0D;">Fernando Borjas W.</strong><br>
                  Agente Inmobiliario<br>
                  <span style="color: #F2C94C; font-weight: 600;">Bestart Propiedades</span>
                </p>
              </div>
              
              <!-- WhatsApp button -->
              <div style="text-align: center; margin-top: 30px;">
                <p style="color: #2E2E2E; font-size: 16px; margin-bottom: 20px;">
                  ¿Tienes alguna pregunta? ¡Contáctanos directamente!
                </p>
                <a href="https://wa.me/56967968354?text=Hola,%20recibí%20el%20e-book%20y%20me%20gustaría%20obtener%20más%20información" style="display: inline-block; background: linear-gradient(135deg, #25D366, #128C7E); color: white; text-decoration: none; font-weight: 600; padding: 15px 30px; border-radius: 50px; font-size: 16px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); transition: all 0.3s ease;">
                  💬 Escribir por WhatsApp
                </a>
                <p style="color: #666; font-size: 14px; margin-top: 15px;">
                  +56 9 6796 8354
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #0D0D0D; padding: 30px; text-align: center;">
              <div style="background-color: #F2C94C; display: inline-block; padding: 8px 16px; border-radius: 4px; margin-bottom: 15px;">
                <span style="color: #0D0D0D; font-weight: 700; font-size: 14px; letter-spacing: 1px;">BESTART</span>
              </div>
              <p style="color: #F2C94C; font-size: 14px; margin: 0;">
                Tu socio de confianza en bienes raíces
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to admin with lead information
    const adminEmailHtml = `
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px -4px rgba(46, 46, 46, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0D0D0D, rgba(242, 201, 76, 0.15), #0D0D0D); padding: 30px; text-align: center;">
              <div style="background-color: #F2C94C; display: inline-block; padding: 10px 20px; border-radius: 6px; margin-bottom: 15px;">
                <h1 style="margin: 0; color: #0D0D0D; font-size: 18px; font-weight: 700; letter-spacing: 1px;">BESTART</h1>
              </div>
              <h2 style="margin: 0; color: #F2C94C; font-size: 24px; font-weight: 600;">🎯 Nuevo Lead Capturado</h2>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background: linear-gradient(145deg, #fef7e0, #ffffff); border: 2px solid #F2C94C; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 20px 0; color: #0D0D0D; font-size: 18px;">Información del Lead:</h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">Nombre:</strong>
                    <span style="color: #0D0D0D;">${name}</span>
                  </div>
                  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">Email:</strong>
                    <a href="mailto:${email}" style="color: #F2C94C; text-decoration: none;">${email}</a>
                  </div>
                  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">Teléfono:</strong>
                    <a href="tel:${phone}" style="color: #F2C94C; text-decoration: none;">${phone}</a>
                  </div>
                  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">IP:</strong>
                    <span style="color: #0D0D0D;">${clientIP}</span>
                  </div>
                  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">Fecha:</strong>
                    <span style="color: #0D0D0D;">${new Date().toLocaleString('es-ES')}</span>
                  </div>
                  <div style="display: flex; padding: 8px 0;">
                    <strong style="color: #2E2E2E; min-width: 100px;">ID en BD:</strong>
                    <span style="color: #0D0D0D; font-family: monospace;">${leadData.id}</span>
                  </div>
                </div>
              </div>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #F2C94C;">
                <p style="margin: 0; font-size: 14px; color: #2E2E2E; line-height: 1.5;">
                  ✅ Este lead ha sido guardado automáticamente en la base de datos<br>
                  📧 Ha recibido el email con el acceso a Google Drive
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #0D0D0D; padding: 20px; text-align: center;">
              <p style="color: #F2C94C; font-size: 12px; margin: 0;">
                Sistema automático de captura de leads - Bestart Propiedades
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails via Mailgun
    console.log('Sending emails via Mailgun...');
    
    const emailPromises = [];

    // Send welcome email to user
    emailPromises.push(
      fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          from: `Fernando Borjas W. <noreply@${MAILGUN_DOMAIN}>`,
          to: email,
          subject: '🎯 Aquí tienes tu E-book: 7 Claves para Vender Bien tu Propiedad',
          html: userEmailHtml,
        }),
      })
    );

    // Send notification email to admin
    emailPromises.push(
      fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          from: `Sistema Bestart <noreply@${MAILGUN_DOMAIN}>`,
          to: 'bestart1@bestart.cl',
          subject: `🎯 Nuevo Lead: ${name} (${email})`,
          html: adminEmailHtml,
        }),
      })
    );

    // Wait for both emails to be sent
    const emailResults = await Promise.allSettled(emailPromises);
    
    console.log('Email sending results:', emailResults);

    // Check if emails were sent successfully
    let emailErrors = [];
    for (let i = 0; i < emailResults.length; i++) {
      const result = emailResults[i];
      if (result.status === 'rejected') {
        emailErrors.push(result.reason);
      } else if (result.status === 'fulfilled') {
        const response = result.value;
        if (!response.ok) {
          const errorText = await response.text();
          emailErrors.push(`Email ${i + 1} failed: ${errorText}`);
        }
      }
    }

    if (emailErrors.length > 0) {
      console.error('Email sending errors:', emailErrors);
      // Still return success since the lead was saved to database
      return new Response(JSON.stringify({
        success: true,
        message: 'Datos guardados correctamente, pero hubo problemas enviando algunos emails',
        leadId: leadData.id,
        emailErrors
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('All processes completed successfully');

    return new Response(JSON.stringify({
      success: true,
      message: 'Perfecto! Te hemos enviado el e-book a tu correo electrónico',
      leadId: leadData.id
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Unexpected error in submit-lead function:', error);
    return new Response(JSON.stringify({
      error: 'Error interno del servidor',
      details: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);