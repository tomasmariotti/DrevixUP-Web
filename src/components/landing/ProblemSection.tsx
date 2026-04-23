import { motion, type Variants } from "framer-motion";
import { AlertTriangle, UserX, MailX, DollarSign } from "lucide-react";
import { Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-destructive" />
    {children}
  </div>
);

const problems = [
  {
    icon: UserX,
    title: "Visitantes llegan → sin respuesta",
    desc: "Clientes potenciales aterrizan en tu sitio, pero no hay sistema para interactuar con ellos. Se van en segundos — para siempre.",
    color: "from-destructive/20 to-transparent",
  },
  {
    icon: AlertTriangle,
    title: "Leads se pierden",
    desc: "Sin captura y calificación instantánea, tus mejores prospectos se escapan. Cada. Solo. Día.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    icon: MailX,
    title: "Sin seguimiento",
    desc: "El 80% de las ventas requieren 5+ contactos. Si no haces seguimiento automáticamente, estás dejando dinero sobre la mesa.",
    color: "from-yellow-500/20 to-transparent",
  },
  {
    icon: DollarSign,
    title: "Dinero escapando silenciosamente",
    desc: "Pagas por tráfico que convierte al 1-2%. Sin un sistema, estás quemando presupuesto y perdiendo ingresos invisiblemente.",
    color: "from-red-500/20 to-transparent",
  },
];

const ProblemSection = () => (
  <section className="relative py-28 md:py-40 bg-gradient-to-b from-transparent via-destructive/[0.03] to-transparent">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}><SectionLabel>El Problema</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-bold leading-[1.1] md:text-5xl">
            Tu tráfico fluye.
            <br className="hidden md:block" />
            Tus <span className="text-gradient-accent">ingresos no</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            La mayoría de los negocios tienen un sitio web que se ve bien pero no hace nada.
            Sin un sistema de conversión, cada visitante es una oportunidad perdida —
            y el costo se acumula silenciosamente.
          </motion.p>
        </motion.div>

        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-4">
          {problems.map((p) => (
            <motion.li
              key={p.title}
              variants={fadeUp}
              className="group flex gap-4 rounded-2xl border border-destructive/20 bg-destructive/[0.04] p-5 transition-all duration-500 hover:border-destructive/40 hover:bg-destructive/[0.08]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/15 text-destructive transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  </section>
);

export default ProblemSection;
