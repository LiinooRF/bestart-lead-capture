export function Footer() {
  return (
    <footer className="bg-bestart-dark text-bestart-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src="/bestart-logo-complete.png" 
                alt="Bestart Propiedades" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-bestart-light opacity-80">Transformando propiedades, cambiando vidas</p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-bestart-primary">Contacto</h4>
            <div className="space-y-2 text-bestart-light opacity-90">
              <p>📧 info@bestart.cl</p>
              <p>📱 +569 6796 8354</p>
              <p>📍 Av. Libertador O'Higgins 4499</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 text-bestart-primary">Síguenos</h4>
            <div className="space-y-2 text-bestart-light opacity-90">
              <p>YouTube: Fernando Borjas</p>
              <p>Web: www.bestart.cl</p>
              <p>Correo: info@bestart.cl</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bestart-primary/30 mt-8 pt-6 text-center">
          <p className="text-bestart-light opacity-70">
            © 2024 Bestart. Todos los derechos reservados. • Agente inmobiliario certificado
          </p>
        </div>
      </div>
    </footer>
  );
}