import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { YouTubeVideo } from "@/components/YouTubeVideo";
import { AgentSection } from "@/components/AgentSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleFormSuccess = () => {
    setShowVideo(true);
    // Scroll to video section
    setTimeout(() => {
      document.getElementById('video-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-bestart-white">
      <head>
        <title>7 Claves para Vender Bien tu Propiedad - E-book Gratuito | Bestart</title>
        <meta 
          name="description" 
          content="Descarga gratis el e-book '7 Claves para Vender Bien tu Propiedad' de Fernando Borjas W. Guía práctica para maximizar el valor de tu propiedad antes de vender." 
        />
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
        
        {/* Bestart Logo - Top Left - Transparent */}
        <div className="absolute top-8 left-8 z-20">
          <div className="backdrop-blur-sm rounded-2xl px-6 py-4">
            <img 
              src="/src/assets/bestart-logo-complete.png" 
              alt="Bestart Propiedades" 
              className="h-10 w-auto drop-shadow-lg"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-yellow backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-bestart-accent shadow-yellow">
            <img 
              src="/src/assets/bestart-logo-complete.png" 
              alt="Bestart" 
              className="h-8 w-auto"
            />
            <span className="text-bestart-dark font-bold text-lg">Fernando Borjas W.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bestart-white mb-6 leading-tight">
            ¿Vendes tu casa?{" "}
            <span className="bg-gradient-to-r from-bestart-primary to-yellow-400 bg-clip-text text-transparent">
              Hazlo bien
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-bestart-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Después de 15 años vendiendo propiedades, he visto todos los errores posibles.
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
            {!showVideo ? (
              <LeadCaptureForm onSuccess={handleFormSuccess} />
            ) : (
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-bestart-white mb-4">
                    ¡Gracias! Aquí tienes tu e-book
                  </h2>
                  <a 
                    href="/7-claves-vender-propiedad.pdf" 
                    download
                    className="inline-flex items-center gap-2 bg-bestart-primary text-bestart-dark px-6 py-3 rounded-xl font-semibold hover:bg-bestart-primary/90 transition-all duration-300"
                  >
                    📥 Descargar E-book
                  </a>
                </div>
                <YouTubeVideo />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Section - Only shows after form submission */}
      {showVideo && (
        <section id="video-section" className="py-20 bg-bestart-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-bestart-dark rounded-xl px-4 py-2">
                  <img 
                    src="/src/assets/bestart-logo-complete.png" 
                    alt="Bestart" 
                    className="h-8 w-auto brightness-0 invert"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-bestart-dark mb-4">
                Un mensaje especial para ti
              </h2>
              <p className="text-bestart-gray text-lg">
                Conoce más sobre mi metodología y cómo puedo ayudarte
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <AgentSection />

      {/* Key Points Section */}
      <section className="py-20 bg-bestart-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-bestart-dark rounded-xl px-4 py-2">
                <img 
                  src="/src/assets/bestart-logo-complete.png" 
                  alt="Bestart" 
                  className="h-6 w-auto brightness-0 invert"
                />
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
                "Llevo 15 años en esto. He visto propiedades idénticas: una se vende en 2 semanas, 
                la otra tarda 8 meses. La diferencia no es suerte."
              </p>
              <p className="text-bestart-primary font-semibold">- Fernando</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;