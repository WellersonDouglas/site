import { GlassCard } from "@/components/GlassCard";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certificados", href: "#certificates" },
    { label: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-foreground/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading gradient-text mb-3 lg:text-start text-center">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm mb-4 lg:text-start text-center">
              Web Designer & Especialista em Automação criando experiências digitais modernas.
            </p>
            <div className="flex items-center gap-3 lg:justify-start justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="glass glass-hover p-2 rounded-lg hover:text-primary transition-smooth"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="container px-4 mx-auto text-center">
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h4 className="font-semibold mb-4 lg:text-start text-center">Vamos Conversar</h4>
            <p className="text-sm text-muted-foreground mb-4 lg:text-start text-center">
              Interessado em trabalhar juntos? Entre em contato!
            </p>
            <a
              href="#contact"
              className="flex justify-center items-center gap-2 text-sm text-primary hover:text-primary-dark transition-smooth lg:inline-flex"
            >
              Enviar mensagem
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-2 md:flex-row items-center justify-between pt-8 border-t border-foreground/10 gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Wellerson Douglas. Todos os direitos reservados.
          </p>
            <button
            onClick={scrollToTop}
            className="glass glass-hover p-3 rounded-full group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
       
      </div>
    </footer>
  );
};
