import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 98 },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 88 },
        { name: "Framer", level: 85 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      title: "Automação",
      skills: [
        { name: "N8N", level: 92 },
        { name: "WordPress", level: 85 },
        { name: "API Integration", level: 90 },
        { name: "Webhooks", level: 88 },
      ],
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Chrome DevTools", level: 92 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative grid-pattern">
      <div className="absolute inset-0 bg-gradient-surface opacity-30" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Tecnologias & <span className="gradient-text">Ferramentas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderno para criar soluções de alto desempenho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <h3 className="text-xl font-bold font-heading mb-6 gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-primary">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 glass rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          className="h-full bg-gradient-primary rounded-full shadow-glow"
                        />
                      </div>
                    </motion.div>
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
