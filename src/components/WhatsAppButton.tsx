import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "56967968354"; // Formato internacional sin +
  const message = `Hola! Si sientes que tu propiedad tiene potencial de mejorar su valor de venta, pero no tienes los recursos suficientes para invertir en ella...

Contáctate con nosotros y te daremos una excelente propuesta.

¡No pierdas esta oportunidad!`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bestart-light to-bestart-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-yellow opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-accent opacity-15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-bestart-dark rounded-xl px-4 py-2">
                <img 
                  src="/bestart-logo-complete.png" 
                  alt="Bestart" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-bestart-dark mb-6">
              ¿Tu propiedad tiene potencial pero te faltan recursos?
            </h2>
            <p className="text-xl text-bestart-gray mb-4 leading-relaxed">
              Si sientes que tu propiedad tiene potencial de mejorar su valor de venta, 
              pero no tienes los recursos suficientes para invertir en ella...
            </p>
            <p className="text-lg text-bestart-primary font-semibold mb-8">
              Contáctate con nosotros y te daremos una excelente propuesta.
            </p>
            <p className="text-xl font-bold text-bestart-dark mb-8">
              ¡No pierdas esta oportunidad!
            </p>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-4 mx-auto"
          >
            <svg 
              className="w-8 h-8" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z"/>
            </svg>
            Escríbenos por WhatsApp
          </Button>
          
          <p className="mt-4 text-bestart-gray">
            📱 <span className="font-semibold">+56 9 6796 8354</span>
          </p>
        </div>
      </div>
    </section>
  );
}