import { Card, CardContent } from "@/components/ui/card";
import agentPhoto from "@/assets/agent-photo.jpg";

export function AgentSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-bestart-light to-bestart-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-yellow opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-accent opacity-15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/src/assets/bestart-logo-complete.png" 
              alt="Bestart Propiedades" 
              className="h-10 w-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-yellow bg-clip-text text-transparent mb-4">
            Fernando Borjas W.
          </h2>
          <p className="text-xl text-bestart-gray max-w-2xl mx-auto">
            Tu experto en propiedades con más de 15 años transformando el mercado inmobiliario
          </p>
        </div>

        {/* Modern card design */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-card rounded-3xl shadow-yellow border border-bestart-primary/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Content side */}
              <div className="p-12 lg:p-16 bg-gradient-to-br from-bestart-white to-bestart-light/50">
                <div className="space-y-8">
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-yellow rounded-2xl text-bestart-dark">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm font-medium">Años de experiencia</div>
                    </div>
                    <div className="text-center p-6 bg-bestart-white rounded-2xl shadow-soft border border-bestart-primary/10">
                      <div className="text-3xl font-bold text-bestart-primary">500+</div>
                      <div className="text-sm font-medium text-bestart-gray">Propiedades vendidas</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-bestart-gray leading-relaxed">
                      <span className="font-semibold text-bestart-primary">No soy un agente más.</span> 
                      Soy alguien que ha visto todos los errores posibles y sabe exactamente qué funciona y qué no.
                    </p>
                    
                    <p className="text-bestart-gray">
                      He ayudado a cientos de personas a vender sus propiedades de forma rápida y rentable. 
                      Mi metodología se basa en experiencia real, no en teoría.
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-bestart-primary">Mi experiencia incluye:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Preparación estratégica de propiedades",
                        "Fotografía y marketing inmobiliario",
                        "Negociación y cierre de ventas",
                        "Optimización de precios de venta"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-bestart-white rounded-xl shadow-soft border border-bestart-primary/10">
                          <div className="w-2 h-2 bg-gradient-yellow rounded-full"></div>
                          <span className="text-bestart-gray font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="relative bg-gradient-to-br from-bestart-primary/5 to-bestart-accent/10 p-12 lg:p-16 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-yellow rounded-3xl blur-xl opacity-30"></div>
                  <img 
                    src={agentPhoto} 
                    alt="Fernando Borjas W. - Agente Inmobiliario Bestart" 
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-elegant border-4 border-bestart-white"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-yellow text-bestart-dark px-6 py-4 rounded-2xl shadow-yellow border-4 border-bestart-white">
                    <div className="text-center">
                      <div className="text-sm font-medium">Certificado por</div>
                      <img 
                        src="/src/assets/bestart-logo-complete.png" 
                        alt="Bestart" 
                        className="h-6 w-auto mx-auto mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-yellow text-bestart-dark rounded-2xl p-8 max-w-3xl mx-auto shadow-yellow">
            <blockquote className="text-xl font-medium italic mb-4">
              "En 15 años he visto propiedades idénticas: una se vende en 2 semanas, la otra tarda 8 meses. 
              La diferencia no es suerte, es saber qué hacer."
            </blockquote>
            <div className="font-bold">- Fernando Borjas W.</div>
          </div>
        </div>
      </div>
    </section>
  );
}