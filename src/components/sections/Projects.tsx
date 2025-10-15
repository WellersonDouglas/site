import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  category: "web" | "automation" | "all";
  tags: string[];
  image: string;
  link: string;
  fullDescription: string;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "web" | "automation">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Moderno exemplo",
      description: "Loja online completa com design minimalista e alta conversão",
      category: "web",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "https://agenciafuzion.com.br/",
      fullDescription: "Projeto completo de e-commerce com carrinho de compras, checkout integrado, painel administrativo e sistema de pagamento. Design focado em conversão com UX otimizada.",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Painel de análise de dados com visualizações interativas",
      category: "web",
      tags: ["React", "Charts", "API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "https://agenciafuzion.com.br/",
      fullDescription: "Dashboard completo com gráficos interativos, métricas em tempo real e relatórios personalizáveis. Integração com múltiplas fontes de dados.",
    },
    {
      id: 3,
      title: "Automação N8N",
      description: "Sistema de automação de marketing e vendas",
      category: "automation",
      tags: ["N8N", "Webhooks", "API"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
      link: "#",
      fullDescription: "Fluxo automatizado conectando CRM, email marketing, WhatsApp Business e planilhas. Redução de 80% no tempo de processos manuais.",
    },
    {
      id: 4,
      title: "Landing Page SaaS",
      description: "Página de conversão para produto SaaS B2B",
      category: "web",
      tags: ["Next.js", "Framer", "SEO"],
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      link: "#",
      fullDescription: "Landing page otimizada para conversão com animações suaves, formulários inteligentes e integração com ferramentas de analytics. Taxa de conversão de 12%.",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Projetos <span className="gradient-text">Recentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Alguns dos trabalhos que realizei para clientes ao redor do mundo
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Todos", value: "all" as const },
              { label: "Web Design", value: "web" as const },
              { label: "Automação", value: "automation" as const },
            ].map((item) => (
              <Button
                key={item.value}
                variant={filter === item.value ? "hero" : "outline"}
                size="sm"
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <GlassCard className="overflow-hidden cursor-pointer group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button
                      variant="hero"
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="glass px-3 py-1 rounded-full text-xs border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
            
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl"
            >
              <GlassCard strong className="p-0 overflow-hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 glass glass-hover p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold font-heading mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="glass px-4 py-2 rounded-full text-sm border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full group">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Visualizar Projeto
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
