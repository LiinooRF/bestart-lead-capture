import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { YouTubeVideo } from "@/components/YouTubeVideo";
import { AgentSection } from "@/components/AgentSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleFormSuccess = () => {
    setShowVideo(true);
  };
  return <div className="min-h-screen bg-bestart-white">
      <head>
        <title>7 Claves para Vender Bien tu Propiedad - E-book Gratuito | Bestart</title>
        <meta name="description" content="Descarga gratis el e-book '7 Claves para Vender Bien tu Propiedad' de Fernando Borjas W. Guía práctica para maximizar el valor de tu propiedad antes de vender." />
      </head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
        {/* Background with Real Estate image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bestart-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bestart-primary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        {/* Bestart Logo - Top Left - Responsive positioning */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <div className="backdrop-blur-sm rounded-2xl px-3 py-2 md:px-6 md:py-4">
            <img src="/bestart-logo-complete.png" alt="Bestart Propiedades" className="h-6 md:h-10 w-auto drop-shadow-lg" style={{
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
          }} />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bestart-white mb-6 leading-tight">
            ¿Vendes tu casa?{" "}
            <span className="bg-gradient-to-r from-bestart-primary to-yellow-400 bg-clip-text text-transparent">
              Mejore su venta con estos consejos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-bestart-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Después de 7 años vendiendo propiedades, he visto los errores posibles.
          </p>
          
          <p className="text-lg md:text-xl text-bestart-white/80 mb-12 max-w-3xl mx-auto">
            En esta guía te comparto las <strong>7 claves</strong> que realmente funcionan para vender más rápido y a mejor precio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-bestart-white/80">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Sin rodeos ni teoría</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Solo lo que funciona</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>15 minutos de lectura</span>
            </div>
          </div>
          
          <div className="max-w-lg mx-auto">
            {!showVideo ? <LeadCaptureForm onSuccess={handleFormSuccess} /> : <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-bestart-white mb-4">
                      ¡Perfecto! 🎯
                    </h2>
                    <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-3">📧</div>
                      <p className="text-lg font-semibold text-bestart-white mb-2">
                        Te hemos enviado el link de Google Drive a tu correo
                      </p>
                      <p className="text-bestart-white/80 text-sm">
                        Revisa tu bandeja de entrada (y spam por si acaso)
                      </p>
                    </div>
                  </div>
                  <YouTubeVideo />
                  
                  {/* WhatsApp Section */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-bestart-white mb-4">
                        ¿Tienes alguna pregunta?
                      </h3>
                      <p className="text-bestart-white/80 mb-6 text-sm sm:text-base">
                        Si sientes que tu propiedad tiene potencial de mejorar su valor de venta, pero no tienes los recursos suficientes para invertir en ella...
                      </p>
                      <p className="text-bestart-white font-semibold mb-6 text-sm sm:text-base">
                        Contáctate con nosotros y te daremos una excelente propuesta.
                      </p>
                      
                      <div className="flex justify-center">
                        <button onClick={() => {
                    const phoneNumber = "56967968354";
                    const message = `Hola! Si sientes que tu propiedad tiene potencial de mejorar su valor de venta, pero no tienes los recursos suficientes para invertir en ella...

Contáctate con nosotros y te daremos una excelente propuesta.

¡No pierdas esta oportunidad!`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z" />
                          </svg>
                          <span className="text-xs sm:text-base">Escríbenos por WhatsApp</span>
                        </button>
                      </div>
                      
                      <p className="mt-4 text-bestart-white/70 text-xs sm:text-sm">
                        📱 <span className="font-semibold">+56 9 6796 8354</span>
                      </p>
                    </div>
                  </div>
                </div>}
          </div>
        </div>
      </section>

      {/* Video Section - Only shows after form submission */}
      {showVideo && <section id="video-section" className="py-20 bg-bestart-light">
          <div className="container mx-auto px-4">
          </div>
        </section>}

      {/* Trust Section */}
      <AgentSection />

      {/* Key Points Section */}
      <section className="py-20 bg-bestart-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-bestart-dark rounded-xl px-4 py-2">
                <img src="/bestart-logo-complete.png" alt="Bestart" className="h-6 w-auto brightness-0 invert" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-bestart-dark mb-4">
              Mira, te voy a ser honesto...
            </h2>
            <p className="text-lg text-bestart-gray/80 max-w-3xl mx-auto">
              La mayoría de vendedores cometen los mismos errores una y otra vez. 
              Aquí tienes exactamente qué hacer (y qué NO hacer).
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-bestart-dark mb-4">
                  El secreto de la pintura
                </h3>
                <p className="text-bestart-gray leading-relaxed">
                  Un cliente aumentó el precio solo pintando bien. 
                  Te explico exactamente qué colores usar y cuáles evitar.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-bestart-dark mb-4">
                  Dónde SÍ invertir tu plata
                </h3>
                <p className="text-bestart-gray leading-relaxed">
                  He visto gente gastar millones en el jardín y descuidar el baño. 
                  Error grave. Te muestro las 3 zonas que SÍ venden.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-bestart-dark mb-4">
                  La primera impresión lo es todo
                </h3>
                <p className="text-bestart-gray leading-relaxed">
                  Una casa mal fotografiada puede tardar 6 meses más en venderse. 
                  Te doy mi checklist personal (la misma que uso con mis clientes).
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-bestart-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-bestart-gray italic mb-2">
                "Llevo años en esto. He visto propiedades idénticas: una se vende en 2 semanas, 
                la otra tarda 8 meses. La diferencia no es suerte."
              </p>
              <p className="text-bestart-primary font-semibold">- Fernando</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <WhatsAppButton />

      <Footer />
    </div>;
};
export default Index;