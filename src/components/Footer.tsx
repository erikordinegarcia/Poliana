const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="h-20 w-auto" />
          </div>

          {/* Info Text */}
          <div className="space-y-2 text-sm text-background/70">
            <p>Curadoria especializada em livros de receitas</p>
            <p className="flex items-center justify-center gap-1">
              Checkout próprio com segurança e praticidade
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-background/20" />

          {/* Copyright */}
          <p className="text-xs text-background/50">
            © {currentYear} Sabor em Páginas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
