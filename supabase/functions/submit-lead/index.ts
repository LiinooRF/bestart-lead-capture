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

    // Google Drive links (you can update these with your actual links)
    const googleDriveLinks = [
      {
        title: "7 Claves para Vender Bien tu Propiedad",
        url: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
      }
      // Add more PDF/ebook links here as needed
    ];

    // Email to user with PDF links
    const userEmailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb;">¡Gracias por tu interés, ${name}!</h1>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Hola ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Te agradecemos tu interés en nuestro contenido. Como prometimos, aquí tienes acceso a nuestros recursos gratuitos:
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${googleDriveLinks.map(link => `
              <p style="margin: 10px 0;">
                📄 <strong>${link.title}</strong><br>
                <a href="${link.url}" style="color: #2563eb; text-decoration: none; font-weight: 500;">
                  Descargar aquí →
                </a>
              </p>
            `).join('')}
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Esperamos que este contenido te sea de gran utilidad. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
          </p>
          
          <div style="border-top: 2px solid #e5e7eb; margin-top: 30px; padding-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              Saludos,<br>
              <strong>Fernando Borjas W.</strong><br>
              Bestart Propiedades
            </p>
          </div>
        </body>
      </html>
    `;

    // Email to admin with lead information
    const adminEmailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #dc2626;">🎯 Nuevo Lead Capturado</h2>
          
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Información del Lead:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</li>
              <li style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></li>
              <li style="margin: 8px 0;"><strong>IP:</strong> ${clientIP}</li>
              <li style="margin: 8px 0;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</li>
              <li style="margin: 8px 0;"><strong>ID en BD:</strong> ${leadData.id}</li>
            </ul>
          </div>
          
          <p style="font-size: 14px; color: #6b7280;">
            Este lead ha sido guardado automáticamente en la base de datos y ha recibido el email con los PDFs.
          </p>
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
          to: ADMIN_EMAIL,
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
      if (emailResults[i].status === 'rejected') {
        emailErrors.push(emailResults[i].reason);
      } else if (emailResults[i].status === 'fulfilled') {
        const response = emailResults[i].value as Response;
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