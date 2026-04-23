import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };

const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full will-change-transform"
        style={{
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 3 === 0
            ? "hsl(var(--neon-blue) / 0.6)"
            : i % 3 === 1
            ? "hsl(var(--neon-purple) / 0.5)"
            : "hsl(var(--neon-green) / 0.4)",
        }}
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const HeroSection = () => (
  <section id="top" className="relative overflow-hidden pt-36 pb-28 md:pt-48 md:pb-36">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <ParticleField />
    <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[1400px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]" />
    <div className="absolute right-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[hsl(var(--neon-purple)/0.12)] blur-[120px]" />

    <div className="container relative mx-auto px-4 md:px-6">
      <motion.div initial="hidden" animate="show" variants={stagger} className="mx-auto max-w-4xl text-center">
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Sistema de Conversión con IA
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Tu sitio web recibe visitas.
          <br className="hidden md:block" />
          Pero <span className="text-gradient">ningún sistema</span> las está convirtiendo.
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Instalamos un sistema completo que captura, responde y convierte leads automáticamente.
          Sin suposiciones. Sin seguimientos manuales. Solo resultados.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="#cta-final">
              Activar mi sistema <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#system">
              Ver cómo funciona <ChevronRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {["Sin compromiso", "Listo en días", "Automatización 24/7"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
