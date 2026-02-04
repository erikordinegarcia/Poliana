import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
          {/* Tagline */}
          <p className="text-caption uppercase tracking-[0.3em] text-primary">
            Curadoria Especializada
          </p>
          
          {/* Main Headline */}
          <h1 className="text-display text-foreground">
            Livros de Receitas para{" "}
            <span className="italic text-primary">Apaixonados</span>{" "}
            por Gastronomia
          </h1>
          
          {/* Description */}
          <p className="text-body text-muted-foreground max-w-xl mx-auto text-lg">
            Uma seleção cuidadosa dos melhores livros de receitas, de clássicos atemporais 
            a edições raras. Compra segura e prática via Mercado Livre.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => onNavigate("catalogo")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium tracking-wide"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => onNavigate("destaques")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
