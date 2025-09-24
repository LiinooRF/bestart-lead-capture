import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureFormProps {
  onSuccess: () => void;
}

export function LeadCaptureForm({ onSuccess }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Submitting lead:", formData);
      
      // Submit to Supabase Edge Function
      const response = await fetch('https://krxwrvfvsxwmluctdfal.supabase.co/functions/v1/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al procesar la solicitud');
      }

      console.log('Lead submission successful:', result);
      
      toast({
        title: "¡Perfecto!",
        description: result.message || "Te hemos enviado el e-book a tu correo electrónico",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
      onSuccess();
    } catch (error: any) {
      console.error('Lead submission error:', error);
      toast({
        title: "Error",
        description: error.message || "Hubo un problema. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-card">
        <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-bestart-primary/20 rounded-full px-4 py-2 mb-4 border border-bestart-primary/30">
              <span className="text-2xl">🎯</span>
              <span className="text-bestart-white font-semibold">Descarga Gratis</span>
            </div>
          <h3 className="text-xl font-bold text-bestart-white mb-2">
            Te lo envío al toque
          </h3>
          <p className="text-bestart-white/80 text-sm">
            Solo necesito estos datos para mandártelo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-bestart-white font-medium text-sm">
              Nombre completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre completo"
              className="bg-white/20 border-white/30 text-bestart-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/30 transition-all duration-300 rounded-xl h-12"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-bestart-white font-medium text-sm">
              Correo electrónico *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="bg-white/20 border-white/30 text-bestart-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/30 transition-all duration-300 rounded-xl h-12"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="text-bestart-white font-medium text-sm">
              Teléfono *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              className="bg-white/20 border-white/30 text-bestart-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/30 transition-all duration-300 rounded-xl h-12"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-bestart-primary text-bestart-dark hover:bg-bestart-primary/90 font-bold py-4 px-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:hover:scale-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-bestart-dark/30 border-t-bestart-dark rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>🚀</span>
                Envíamelo ahora
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}