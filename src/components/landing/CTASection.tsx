import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="cta-final" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-border shadow-elegant"
      >
        {/* Multi-layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-secondary/40" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-[hsl(270_80%_65%/0.15)] blur-[100px]" />

        <div className="relative p-10 md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Listo para convertir
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Ve cómo funcionaría{" "}
              <br className="hidden md:block" />
              <span className="text-gradient">en tu negocio</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Agenda una llamada estratégica gratuita. Analizaremos tu configuración actual y te mostraremos
              exactamente cómo el sistema DrevixUp capturaría y convertiría tu tráfico existente.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com/tomasmariotti2/30min" target="_blank" rel="noopener noreferrer">
                  <Zap className="h-5 w-5" /> Activar mi sistema
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="mailto:hola@drevixup.com">
                  Contáctanos <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Llamada estratégica gratuita", "Sin compromiso requerido", "Resultados en días"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
