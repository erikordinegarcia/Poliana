import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os livros de receitas disponíveis."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-caption uppercase tracking-[0.2em] mb-3">
            Fale Conosco
          </p>
          <h2 className="text-headline text-foreground mb-6">
            Precisa de uma Recomendação?
          </h2>
          <p className="text-body text-muted-foreground mb-8">
            Não sabe qual livro escolher? Entre em contato pelo WhatsApp! 
            Teremos prazer em ajudar você a encontrar o livro perfeito para 
            sua cozinha ou para presentear alguém especial.
          </p>

          {/* WhatsApp Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#22c55e] text-white px-8 py-6 text-base font-medium"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
