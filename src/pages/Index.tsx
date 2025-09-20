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
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-bestart-primary/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bestart-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bestart-accent/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-2xl">🏠</span>
            <span className="text-bestart-white font-semibold">Guía Práctica de Venta</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bestart-white mb-6 leading-tight">
            7 Claves para Vender Bien{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              tu Propiedad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-bestart-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Guía rápida y práctica para <strong>maximizar el valor</strong> de tu propiedad antes de vender
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-bestart-white/80">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Estrategias comprobadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Tips de Fernando Borjas W.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Descarga inmediata</span>
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
                    className="inline-flex items-center gap-2 bg-bestart-white text-bestart-primary px-6 py-3 rounded-xl font-semibold hover:bg-bestart-white/90 transition-all duration-300"
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
        <section id="video-section" className="py-20 bg-bestart-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-bestart-primary mb-4">
                Un mensaje especial para ti
              </h2>
              <p className="text-bestart-text text-lg">
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
          <h2 className="text-3xl font-bold text-center text-bestart-primary mb-16">
            Lo que aprenderás en esta guía
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Pinta con Inteligencia
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Descubre qué colores y técnicas usar para aumentar la percepción 
                  de valor en más de un 10%.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Renueva lo que Impacta
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Aprende a enfocar tu presupuesto donde más pesa: cocina, baños 
                  y espacios clave.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">📸</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Presenta tu Propiedad
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Técnicas de presentación y fotografía que harán que tu propiedad 
                  se venda más rápido.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-bestart-text/80 italic">
              "Una propiedad bien presentada se vende más rápido y con mejor oferta"
            </p>
            <p className="text-bestart-accent font-semibold mt-2">- Fernando Borjas W.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;