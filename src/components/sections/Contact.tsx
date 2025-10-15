import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@portfolio.com",
      link: "mailto:contato@portfolio.com",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Vamos Trabalhar <span className="gradient-text">Juntos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <GlassCard key={index} className="p-6 group">
                <a
                  href={method.link}
                  className="flex items-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-hover transition-smooth">
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </a>
              </GlassCard>
            ))}

            <GlassCard className="p-6 mt-6">
              <h3 className="font-semibold mb-3">Disponibilidade</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Atualmente disponível para novos projetos freelance e contratos.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-sm text-primary font-medium">Disponível</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-foreground/20 focus:border-primary/40 transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-foreground/20 focus:border-primary/40 transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sobre o que você quer falar?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass border-foreground/20 focus:border-primary/40 transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass border-foreground/20 focus:border-primary/40 transition-smooth resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
