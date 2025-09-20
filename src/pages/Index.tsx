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
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-bestart-white py-24 px-4">
        <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Aprende a invertir en propiedades de forma 
            <span className="text-yellow-300"> segura y rentable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
            Descarga gratis nuestro e-book y descubre los secretos del mercado inmobiliario 
            que te permitirán generar ingresos pasivos consistentes
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-bestart-light">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-bestart-primary mb-4">
                Obtén tu guía gratuita ahora
              </h2>
              <p className="text-bestart-text text-lg">
                Completa el formulario y recibe inmediatamente el e-book en tu correo
              </p>
            </div>
            <LeadCaptureForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      </section>

      {/* Video Section - Only shows after form submission */}
      {showVideo && (
        <section id="video-section" className="py-20 bg-bestart-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-bestart-primary mb-4">
                Un mensaje especial para ti
              </h2>
              <p className="text-bestart-text text-lg">
                Conoce más sobre mi metodología y cómo puedo ayudarte
              </p>
            </div>
            <YouTubeVideo />
          </div>
        </section>
      )}

      {/* Trust Section */}
      <AgentSection />

      {/* Benefits Section */}
      <section className="py-20 bg-bestart-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-bestart-primary mb-16">
            ¿Por qué confiar en nuestra metodología?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">📈</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Rentabilidad Comprobada
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Nuestros clientes han obtenido rentabilidades promedio del 15-20% anual 
                  siguiendo nuestras estrategias de inversión.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Inversión Segura
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Análisis riguroso de riesgo y diversificación de portafolio para 
                  proteger tu capital en cualquier escenario de mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-bestart-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-bestart-primary mb-4">
                  Acompañamiento Total
                </h3>
                <p className="text-bestart-text leading-relaxed">
                  Te guiamos paso a paso desde la búsqueda hasta el cierre, 
                  asegurando que tomes las mejores decisiones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
