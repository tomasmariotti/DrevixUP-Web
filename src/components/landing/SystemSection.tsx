import { motion, type Variants } from "framer-motion";
import { Globe, Bot, Mail, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-primary" />
    {children}
  </div>
);

const systemElements = [
  {
    icon: Globe,
    step: "01",
    title: "Sitio Web de Alta Conversión",
    desc: "No solo una página bonita — una máquina de conversión diseñada estratégicamente. Cada elemento está optimizado para captar atención, generar confianza y motivar la acción.",
    features: ["Copywriting persuasivo", "Ubicación estratégica de CTAs", "Diseño mobile-first", "Optimizado para velocidad"],
    gradient: "from-[hsl(217_91%_60%)] to-[hsl(250_84%_67%)]",
    glowColor: "hsl(217 91% 60% / 0.3)",
  },
  {
    icon: Bot,
    step: "02",
    title: "Agente IA que Responde al Instante",
    desc: "Un agente inteligente que interactúa con visitantes en tiempo real, califica leads, responde preguntas y agenda reuniones — mientras duermes.",
    features: ["Respuestas instantáneas 24/7", "Calificación de leads", "Conversaciones naturales", "Transferencia inteligente a humano"],
    gradient: "from-[hsl(270_80%_65%)] to-[hsl(300_70%_60%)]",
    glowColor: "hsl(270 80% 65% / 0.3)",
  },
  {
    icon: Mail,
    step: "03",
    title: "Sistema de Email que Hace Seguimiento",
    desc: "Secuencias de email automatizadas que nutren leads desde el primer contacto hasta el cierre. Ningún lead se olvida, ninguna oportunidad se enfría.",
    features: ["Secuencias automatizadas", "Emails activados por comportamiento", "Contenido personalizado", "Seguimiento de rendimiento"],
    gradient: "from-[hsl(152_76%_50%)] to-[hsl(180_70%_55%)]",
    glowColor: "hsl(152 76% 50% / 0.3)",
  },
];

const SystemSection = () => (
  <section id="system" className="relative py-28 md:py-40 aurora-bg">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
        <motion.div variants={fadeUp}><SectionLabel>El Sistema</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-bold leading-[1.1] md:text-5xl">
          Tres motores.
          <br className="hidden md:block" />
          Una <span className="text-gradient">máquina de conversión</span>.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 text-muted-foreground leading-relaxed md:text-lg">
          No vendemos herramientas. Instalamos un sistema completo y automatizado que funciona en conjunto
          para convertir cada visitante en un cliente potencial.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-24 grid gap-8 lg:grid-cols-3">
        {systemElements.map((el) => (
          <motion.div
            key={el.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border glass-card p-6 md:p-8 transition-all duration-500 hover:border-primary/40"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Glow background on hover */}
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: el.glowColor }}
            />

            {/* Step badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-mono font-bold tracking-widest text-muted-foreground">
              PASO {el.step}
            </div>

            {/* Icon */}
            <div
              className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${el.gradient}`}>
                <el.icon className="h-7 w-7 text-white" />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold">{el.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{el.desc}</p>

            {/* Feature list */}
            <ul className="mt-6 space-y-2">
              {el.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${el.gradient}`} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Decorative bottom line */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${el.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Connection visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-4"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2 text-sm font-medium backdrop-blur">
          <Sparkles className="h-4 w-4 text-primary" />
          Trabajando juntos como un sistema
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
      </motion.div>
    </div>
  </section>
);

export default SystemSection;
