import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certificates = () => {
  const certificates = [
    {
      title: "Advanced React & TypeScript",
      institution: "Frontend Masters",
      year: "2024",
      link: "#",
    },
    {
      title: "UI/UX Design Specialization",
      institution: "Coursera",
      year: "2023",
      link: "#",
    },
    {
      title: "N8N Automation Expert",
      institution: "N8N Academy",
      year: "2024",
      link: "#",
    },
    {
      title: "Web Performance Optimization",
      institution: "Google",
      year: "2023",
      link: "#",
    },
    {
      title: "Modern CSS & Tailwind",
      institution: "Udemy",
      year: "2023",
      link: "#",
    },
    {
      title: "API Integration & Webhooks",
      institution: "Zapier",
      year: "2024",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Certificações & <span className="gradient-text">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sempre aprendendo e me atualizando com as últimas tecnologias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-hover transition-smooth flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-heading mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="glass px-3 py-1 rounded-full text-xs border-primary/20">
                    {cert.year}
                  </span>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary-dark"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
