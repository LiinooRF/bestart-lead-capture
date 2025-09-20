export function Footer() {
  return (
    <footer className="bg-bestart-primary text-bestart-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">BESTART</h3>
            <p className="text-bestart-light opacity-80">Real Estate Excellence</p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-3">Contacto</h4>
            <div className="space-y-2 text-bestart-light opacity-90">
              <p>📧 info@bestart.cl</p>
              <p>📱 +56 9 1234 5678</p>
              <p>📍 Las Condes, Santiago</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="space-y-2 text-bestart-light opacity-90">
              <p>LinkedIn: /bestart-chile</p>
              <p>Instagram: @bestart.cl</p>
              <p>Web: www.bestart.cl</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bestart-accent/30 mt-8 pt-6 text-center">
          <p className="text-bestart-light opacity-70">
            © 2024 Bestart. Todos los derechos reservados. • Agente inmobiliario certificado
          </p>
        </div>
      </div>
    </footer>
  );
}