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
      // Simulate form submission - in real app this would save to Supabase
      console.log("Lead captured:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "¡Perfecto!",
        description: "Te hemos enviado el e-book a tu correo electrónico",
      });

      onSuccess();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema. Por favor intenta nuevamente.",
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
    <Card className="w-full max-w-md mx-auto shadow-elegant">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-bestart-text font-medium">
              Nombre completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre completo"
              className="border-2 border-input focus:border-accent transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-bestart-text font-medium">
              Correo electrónico *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="border-2 border-input focus:border-accent transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-bestart-text font-medium">
              Teléfono *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              className="border-2 border-input focus:border-accent transition-colors"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:bg-gradient-accent text-bestart-white font-semibold py-3 px-6 text-lg transition-all duration-300 hover:shadow-glow disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Quiero mi e-book gratis"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}