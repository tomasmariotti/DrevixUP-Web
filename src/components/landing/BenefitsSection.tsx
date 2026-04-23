import { motion, type Variants } from "framer-motion";
import { TrendingUp, Clock, Zap, MailCheck, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-accent" />
    {children}
  </div>
);

const benefits = [
  {
    icon: TrendingUp,
    title: "Más Conversiones",
    desc: "Convierte visitantes pasivos en leads activos. Nuestro sistema está diseñado para maximizar cada punto de interacción en tu sitio.",
    stat: "+340%",
    statLabel: "aumento promedio",
    gradient: "from-[hsl(217_91%_60%)] to-[hsl(250_84%_67%)]",
  },
  {
    icon: Zap,
    title: "Menos Trabajo Manual",
    desc: "Deja de perseguir leads manualmente. La automatización maneja calificación, respuestas y seguimientos para que tu equipo se enfoque en cerrar.",
    stat: "90%",
    statLabel: "menos tareas manuales",
    gradient: "from-[hsl(270_80%_65%)] to-[hsl(217_91%_60%)]",
  },
  {
    icon: Clock,
    title: "Respuesta 24/7",
    desc: "Tu agente IA nunca duerme. Cada visitante recibe una respuesta instantánea e inteligente — día o noche, entre semana o fin de semana.",
    stat: "<3s",
    statLabel: "tiempo de respuesta",
    gradient: "from-[hsl(152_76%_50%)] to-[hsl(180_70%_55%)]",
  },
  {
    icon: MailCheck,
    title: "Seguimiento Automatizado",
    desc: "Secuencias de email activadas por comportamiento nutren cada lead a través de tu embudo. Ningún lead se enfría. Ninguna oportunidad se olvida.",
    stat: "5x",
    statLabel: "más puntos de contacto",
    gradient: "from-[hsl(45_90%_55%)] to-[hsl(30_90%_55%)]",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
        <motion.div variants={fadeUp}><SectionLabel>Beneficios</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
          Diseñado para convertir,
          <br className="hidden md:block" />
          no solo para <span className="text-gradient">verse bien</span>.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground md:text-lg">
          Cada componente del sistema DrevixUp está diseñado para un resultado: convertir tu tráfico en ingresos.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid gap-6 md:grid-cols-2">
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border glass-card p-6 md:p-8 transition-all duration-500 hover:border-primary/40"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <b.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-gradient">{b.stat}</div>
                <div className="text-xs text-muted-foreground">{b.statLabel}</div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${b.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-50`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
