import { motion, type Variants } from "framer-motion";
import { X, Check, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-primary" />
    {children}
  </div>
);

const comparisons = [
  { aspect: "Enfoque", others: "Herramientas desconectadas", drevixup: "Sistema unificado" },
  { aspect: "Ejecución", others: "Procesos manuales", drevixup: "Completamente automatizado" },
  { aspect: "Resultados", others: "Resultados impredecibles", drevixup: "Crecimiento medible" },
  { aspect: "Respuesta", others: "Solo horarios laborales", drevixup: "24/7 con IA" },
  { aspect: "Seguimiento", others: "Esperar que vuelvan", drevixup: "Secuencias automatizadas" },
  { aspect: "Optimización", others: "Configurar y olvidar", drevixup: "Mejora continua" },
];

const ComparisonSection = () => (
  <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
        <motion.div variants={fadeUp}><SectionLabel>Comparación</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
          Otros venden herramientas.
          <br className="hidden md:block" />
          Nosotros instalamos <span className="text-gradient">sistemas</span>.
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-border glass-card"
      >
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-border bg-secondary/30 px-6 py-4 text-sm font-semibold">
          <div className="text-muted-foreground">Característica</div>
          <div className="text-center text-muted-foreground">Otros</div>
          <div className="text-center text-primary">DrevixUp</div>
        </div>

        {/* Rows */}
        {comparisons.map((c, i) => (
          <motion.div
            key={c.aspect}
            variants={fadeUp}
            className={`group grid grid-cols-3 items-center px-6 py-5 transition-colors duration-300 hover:bg-primary/[0.04] ${
              i < comparisons.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <div className="font-medium">{c.aspect}</div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <X className="h-4 w-4 text-destructive/70" />
              <span className="hidden sm:inline">{c.others}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Check className="h-4 w-4 text-accent" />
              <span className="hidden sm:inline font-medium text-foreground">{c.drevixup}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
