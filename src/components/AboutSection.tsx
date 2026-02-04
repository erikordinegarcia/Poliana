import { BookOpen, ShieldCheck, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Curadoria Especializada",
      description:
        "Cada livro é selecionado com carinho e conhecimento, garantindo títulos de qualidade para sua coleção.",
    },
    {
      icon: ShieldCheck,
      title: "Compra Segura",
      description:
        "Todas as compras são finalizadas no Mercado Livre, garantindo segurança, proteção ao comprador e facilidade de pagamento.",
    },
    {
      icon: Heart,
      title: "Paixão pela Gastronomia",
      description:
        "Somos apaixonados por culinária e queremos compartilhar os melhores livros com você.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-caption uppercase tracking-[0.2em] mb-3">
            Quem Somos
          </p>
          <h2 className="text-headline text-foreground">
            Sobre a Sabor em Páginas
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-body text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">Sabor em Páginas</strong> nasceu do amor pelos livros de receitas 
            e pela culinária. Somos uma curadoria especializada em encontrar os melhores 
            títulos gastronômicos — desde clássicos atemporais até edições raras e 
            colecionáveis. Nossa missão é conectar apaixonados por gastronomia aos 
            livros que farão diferença em suas cozinhas.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed mt-4">
            Para sua segurança e praticidade, todas as compras são realizadas 
            diretamente no Mercado Livre, onde você conta com proteção ao comprador, 
            diversas opções de pagamento e entrega em todo o Brasil.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
