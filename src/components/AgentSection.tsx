import { Card, CardContent } from "@/components/ui/card";
import fernandoPhoto from "@/assets/fernando-borjas.jpg";

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
            <div className="bg-bestart-dark rounded-xl px-4 py-2">
              <img 
                src="/bestart-logo-complete.png" 
                alt="Bestart Propiedades" 
                className="h-12 w-auto brightness-0 invert"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-yellow bg-clip-text text-transparent mb-2">
            Fernando Borjas W.
          </h2>
          <p className="text-lg font-semibold text-bestart-primary mb-4">
            Constructor Civil • Ingeniero Industrial
          </p>
          <p className="text-xl text-bestart-gray max-w-2xl mx-auto">
            Experto en propiedades con más de años en el mercado inmobiliario
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
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-center p-6 bg-gradient-yellow rounded-2xl text-bestart-dark">
                      <div className="text-3xl font-bold">7+</div>
                      <div className="text-sm font-medium">Años de experiencia</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-bestart-gray leading-relaxed">
                      <span className="font-semibold text-bestart-primary">Fundé Bestart</span> después de años trabajando 
                      en el mercado inmobiliario tradicional. Vi todos los errores que cometen los agentes y decidí hacer las cosas diferente.
                    </p>
                    
                    <p className="text-bestart-gray">
                      Mi enfoque es directo y honesto. No pierdo tu tiempo con técnicas que no funcionan. 
                      Te digo exactamente qué hacer para vender rápido y bien.
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-bestart-primary">En estos años he dominado:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Cómo preparar una propiedad para vender rápido",
                        "Los errores más caros que cometen los vendedores",
                        "Técnicas de negociación que realmente funcionan",
                        "El precio exacto que debes poner (y cuándo subirlo)"
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
                    src={fernandoPhoto} 
                    alt="Fernando Borjas W. - Fundador de Bestart Propiedades" 
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-elegant border-4 border-bestart-white"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-bestart-dark text-bestart-primary px-6 py-4 rounded-2xl shadow-yellow border-4 border-bestart-white">
                    <div className="text-center">
                      <div className="text-sm font-medium text-bestart-white">Fundador de</div>
        <img 
                        src="/bestart-logo-complete.png" 
                        alt="Bestart" 
                        className="h-6 w-auto mx-auto mt-1 brightness-0 invert"
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
            <blockquote className="text-xl font-medium mb-4">
              "Después de años vendiendo propiedades, decidí crear Bestart para hacer las cosas como deben ser: 
              rápido, honesto y rentable para el vendedor."
            </blockquote>
            <div className="font-bold">- Fernando Borjas W., Fundador de Bestart</div>
          </div>
        </div>
      </div>
    </section>
  );
}