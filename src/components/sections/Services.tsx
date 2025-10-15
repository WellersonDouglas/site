import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Palette, Workflow, Code, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "UI/UX moderno, landing pages de alta conversão e websites responsivos que encantam seus usuários.",
      skills: ["UI/UX Design", "Landing Pages", "Responsive Design", "Figma", "Framer"],
    },
    {
      icon: Workflow,
      title: "Automação",
      description: "Fluxos inteligentes com N8N, integrações poderosas e otimização de processos que economizam tempo e recursos.",
      skills: ["N8N Workflows", "API Integration", "Process Automation", "WordPress", "Zapier"],
    },
    {
      icon: Code,
      title: "Desenvolvimento Frontend",
      description: "Aplicações web modernas com React, TypeScript e as melhores práticas do mercado.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      description: "Otimização de velocidade, SEO técnico e melhores práticas para ranquear no Google.",
      skills: ["Core Web Vitals", "SEO", "Lighthouse", "Analytics", "Speed Optimization"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Serviços & <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e automatizar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-hover transition-smooth">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="glass px-3 py-1 rounded-full text-xs border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
