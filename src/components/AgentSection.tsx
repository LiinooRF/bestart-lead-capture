import { Card, CardContent } from "@/components/ui/card";
import agentPhoto from "@/assets/agent-photo.jpg";

export function AgentSection() {
  return (
    <section className="py-20 bg-bestart-light">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-card">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-bestart-primary mb-6">
                  Tu Experto en Inversiones Inmobiliarias
                </h2>
                <div className="space-y-4 text-bestart-text text-lg leading-relaxed">
                  <p>
                    Con más de <strong>15 años de experiencia</strong> en el mercado inmobiliario chileno, 
                    he ayudado a cientos de inversionistas a construir portafolios rentables y seguros.
                  </p>
                  <p>
                    Mi enfoque se basa en análisis de mercado riguroso, identificación de oportunidades 
                    únicas y acompañamiento personalizado desde la búsqueda hasta el cierre de la inversión.
                  </p>
                  <div className="mt-6">
                    <h3 className="font-semibold text-bestart-primary mb-2">Especializado en:</h3>
                    <ul className="space-y-2 text-bestart-text">
                      <li>• Inversiones en propiedades residenciales</li>
                      <li>• Análisis de rentabilidad y flujos de caja</li>
                      <li>• Identificación de zonas de alta plusvalía</li>
                      <li>• Estrategias de financiamiento óptimo</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 text-center">
                <img 
                  src={agentPhoto} 
                  alt="Agente Inmobiliario Bestart" 
                  className="w-80 h-96 object-cover rounded-lg shadow-elegant mx-auto"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-bestart-primary">Carlos Mendoza</h3>
                  <p className="text-bestart-accent font-medium">Agente Inmobiliario Certificado</p>
                  <p className="text-bestart-text">Bestart Real Estate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}