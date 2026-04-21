import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Calendar, CheckCircle2, ChevronRight, Clock, Code2, LineChart,
  MessageSquare, Rocket, Search, Sparkles, Target, TrendingUp, Workflow, Zap, Star, Bot, MousePointerClick, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import founderImg from "@/assets/founder.jpg";
import logoMark from "@/assets/drevixup-logo.png";

const Logo = ({ className = "h-9 w-9" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-40 blur-md" />
    <img
      src={logoMark}
      alt="DrevixUp logo"
      className="relative h-full w-full object-contain drop-shadow-[0_4px_16px_hsl(var(--primary)/0.5)]"
    />
  </div>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
    <Sparkles className="h-3.5 w-3.5 text-primary" />
    {children}
  </div>
);

/* ---------- NAV ---------- */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Logo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />
          <span className="text-lg font-bold tracking-tight">DrevixUp</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#resultados" className="transition-colors hover:text-foreground">Resultados</a>
          <a href="#proceso" className="transition-colors hover:text-foreground">Proceso</a>
          <a href="#beneficios" className="transition-colors hover:text-foreground">Beneficios</a>
          <a href="#testimonios" className="transition-colors hover:text-foreground">Casos</a>
        </nav>
        <Button variant="hero" size="sm" asChild>
          <a href="#contacto">
            Agendar llamada <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
};

/* ---------- HERO ---------- */
const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
    <div className="absolute inset-0 grid-pattern opacity-60" />
    <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
    <div className="container relative mx-auto px-4 md:px-6">
      <motion.div initial="hidden" animate="show" variants={stagger} className="mx-auto max-w-4xl text-center">
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agencia premium · Entrega en 1-7 días
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Webs que transforman <br className="hidden md:block" />
          visitas en <span className="text-gradient">clientes reales</span>.
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Diseñamos sitios estratégicos, optimizados y automatizados para que tu negocio venda 24/7.
          Sin plantillas. Sin excusas. Resultados medibles desde el día uno.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="#contacto">
              Agendar auditoría gratuita <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#proceso">
              Ver cómo funciona <ChevronRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {["Sin compromiso", "Respuesta en 24h", "Plazas limitadas/mes"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-20 max-w-5xl"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-border glass-card shadow-elegant">
          <img
            src={heroDashboard}
            alt="Dashboard de conversiones DrevixUp mostrando crecimiento"
            width={1280}
            height={960}
            className="w-full"
          />
        </div>
        {/* Floating stats */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-4 top-1/4 hidden rounded-2xl border border-border glass-card p-4 shadow-card md:flex md:items-center md:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">Conversión</div>
            <div className="text-lg font-bold">+250%</div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-4 bottom-1/4 hidden rounded-2xl border border-border glass-card p-4 shadow-card md:flex md:items-center md:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
            <MousePointerClick className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">Leads/mes</div>
            <div className="text-lg font-bold">+1.000</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ---------- METRICS ---------- */
const metrics = [
  { value: "+250%", label: "Conversiones en e-commerce", desc: "Rediseño estratégico + UX persuasivo.", icon: TrendingUp, accent: "from-primary to-primary-glow" },
  { value: "+1.000", label: "Leads cualificados / mes", desc: "Landing optimizada con embudo claro.", icon: Target, accent: "from-accent to-primary" },
  { value: "-60%", label: "Consultas repetidas", desc: "Chatbot inteligente + automatización.", icon: Bot, accent: "from-primary-glow to-accent" },
];

const Metrics = () => (
  <Section id="resultados">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.div variants={fadeUp}><SectionLabel>Resultados reales</SectionLabel></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
        Números que <span className="text-gradient">hablan por nosotros</span>
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
        Cada proyecto se mide. Cada decisión se valida con datos.
      </motion.p>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid gap-6 md:grid-cols-3">
      {metrics.map((m) => (
        <motion.div key={m.label} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-border glass-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-glow">
          <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${m.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`} />
          <m.icon className="relative h-8 w-8 text-primary" />
          <div className="relative mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-gradient">{m.value}</span>
          </div>
          <div className="relative mt-3 text-lg font-semibold">{m.label}</div>
          <p className="relative mt-2 text-sm text-muted-foreground">{m.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

/* ---------- PROBLEMS ---------- */
const problems = [
  { title: "Tu web no genera clientes", desc: "Tienes una vidriera bonita, pero nadie compra. El tráfico llega y se va sin convertir." },
  { title: "Recibes visitas pero no convierten", desc: "Inviertes en anuncios y SEO. El resultado: usuarios que rebotan en segundos." },
  { title: "Pierdes tiempo respondiendo lo mismo", desc: "Atención manual, consultas repetitivas, equipo saturado. El negocio no escala." },
  { title: "Tu marca parece igual que la competencia", desc: "Plantillas genéricas, sin estrategia, sin identidad. Imposible destacar." },
];

const Problems = () => (
  <Section className="bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.div variants={fadeUp}><SectionLabel>El problema</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
          Tu web no debería ser <br />un <span className="text-gradient-accent">gasto sin retorno</span>.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground">
          La mayoría de los negocios tienen un sitio que solo "se ve". Pero una web no es un panfleto digital:
          es tu vendedor más rentable. Cuando no convierte, te cuesta clientes todos los días.
        </motion.p>
      </motion.div>

      <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-4">
        {problems.map((p) => (
          <motion.li key={p.title} variants={fadeUp} className="flex gap-4 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 transition-all hover:border-destructive/40">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
              ✕
            </div>
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </Section>
);

/* ---------- SOLUTION ---------- */
const solutions = [
  { icon: Target, title: "Diseño estratégico", desc: "Cada sección, color y CTA pensado para guiar al usuario hacia la conversión." },
  { icon: MessageSquare, title: "Copywriting persuasivo", desc: "Mensajes que conectan con tu cliente ideal y empujan a la acción." },
  { icon: Workflow, title: "Automatización inteligente", desc: "Flujos, chatbots y CRM que trabajan por ti las 24 horas." },
  { icon: LineChart, title: "Optimización CRO", desc: "Medimos, testeamos y mejoramos. Tu web nunca deja de evolucionar." },
];

const Solution = () => (
  <Section>
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.div variants={fadeUp}><SectionLabel>La solución</SectionLabel></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
        No es una web. <br /> Es una <span className="text-gradient">máquina de clientes</span>.
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
        Combinamos diseño, psicología y tecnología para que cada visita tenga un único destino: convertirse.
      </motion.p>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {solutions.map((s) => (
        <motion.div key={s.title} variants={fadeUp} className="group rounded-2xl border border-border glass-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <s.icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

/* ---------- PROCESS ---------- */
const steps = [
  { n: "01", icon: Search, title: "Análisis del negocio", desc: "Estudiamos tu mercado, cliente ideal y embudo. Sin diagnóstico, no hay solución." },
  { n: "02", icon: Sparkles, title: "Diseño estratégico", desc: "Wireframes, copy y UI alineados a un único objetivo: convertir." },
  { n: "03", icon: Code2, title: "Desarrollo optimizado", desc: "Velocidad, SEO técnico y mobile-first. Web rápida = más ventas." },
  { n: "04", icon: Rocket, title: "Lanzamiento + optimización", desc: "Tracking, analítica y mejoras continuas. Cada mes, mejores resultados." },
];

const Process = () => (
  <Section id="proceso" className="bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.div variants={fadeUp}><SectionLabel>Cómo trabajamos</SectionLabel></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
        De la idea al lanzamiento en <span className="text-gradient">1 a 7 días</span>
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="relative mt-20 grid gap-8 md:grid-cols-4">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
      {steps.map((s) => (
        <motion.div key={s.n} variants={fadeUp} className="relative">
          <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background shadow-glow">
            <s.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="mt-6 text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-primary">PASO {s.n}</div>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

/* ---------- BENEFITS ---------- */
const benefits = [
  { icon: Clock, title: "Vende 24/7 en automático", desc: "Tu web trabaja mientras dormís. Sin pausas, sin lunes." },
  { icon: Target, title: "Más leads cualificados", desc: "Filtramos curiosos. Llegan los que realmente compran." },
  { icon: Workflow, title: "Menos trabajo manual", desc: "Automatizaciones que liberan a tu equipo de tareas repetitivas." },
  { icon: Rocket, title: "Negocio escalable", desc: "Una infraestructura preparada para multiplicar tus ingresos." },
];

const Benefits = () => (
  <Section id="beneficios">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.div variants={fadeUp}><SectionLabel>Beneficios</SectionLabel></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
        Diseñada para vender, <br />no solo para <span className="text-gradient">verse bien</span>.
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid gap-6 md:grid-cols-2">
      {benefits.map((b) => (
        <motion.div key={b.title} variants={fadeUp} className="group flex gap-5 rounded-2xl border border-border glass-card p-6 transition-all hover:border-accent/50">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-110">
            <b.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <p className="mt-1 text-muted-foreground">{b.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

/* ---------- FOUNDER ---------- */
const Founder = () => (
  <Section className="bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto max-w-md">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
          <img src={founderImg} alt="Tomas Mariotti, fundador de DrevixUp" width={800} height={1000} loading="lazy" className="w-full" />
        </div>
        <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-border glass-card p-4 shadow-card">
          <Logo className="h-10 w-10" />
          <div>
            <div className="text-xs text-muted-foreground">Fundador & CEO</div>
            <div className="font-semibold">Tomas Mariotti</div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.div variants={fadeUp}><SectionLabel>Detrás de DrevixUp</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
          Hablá directamente <br />con quien <span className="text-gradient">construye tu web</span>.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground">
          Soy Tomas Mariotti. Ayudo a negocios y pymes a crecer con tecnología eficiente: webs que convierten,
          automatizaciones que escalan y procesos digitales que funcionan sin que tengas que mirarlos.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
          Sin intermediarios, sin promesas vacías. Una conversación clara para entender tu negocio y mostrarte
          exactamente cómo podemos generar más clientes con tu sitio actual o uno nuevo.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">
              Hablá conmigo directamente <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: "Lucía Fernández", role: "CEO · Bloom Boutique", quote: "Pasamos de 12 a 47 ventas semanales en menos de un mes. La web nueva nos hizo ganar tiempo y plata." },
  { name: "Martín Soto", role: "Director · Soto Inmobiliaria", quote: "El embudo que armaron filtra los curiosos. Hoy hablo solo con clientes listos para firmar. Brutal." },
  { name: "Carolina Méndez", role: "Founder · Estudio Vital", quote: "Las consultas por WhatsApp se redujeron a la mitad y los turnos se llenan solos. Inversión recuperada en semanas." },
  { name: "Diego Álvarez", role: "Owner · Álvarez Autopartes", quote: "El equipo entendió el negocio mejor que nosotros. La web hoy vende como si tuviéramos un comercial extra." },
  { name: "Sofía Ruiz", role: "Coach · Sofia Ruiz Mentoring", quote: "Profesional, rápido y muy estratégico. La web no solo se ve increíble, también convierte sin parar." },
];

const Testimonials = () => (
  <Section id="testimonios">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.div variants={fadeUp}><SectionLabel>Testimonios</SectionLabel></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold md:text-5xl">
        Lo que dicen los <span className="text-gradient">que ya facturan más</span>
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          variants={fadeUp}
          className={`group relative rounded-2xl border border-border glass-card p-7 transition-all hover:border-primary/50 hover:shadow-glow ${
            i === 0 ? "lg:row-span-2 lg:bg-gradient-to-br lg:from-primary/10 lg:to-transparent" : ""
          }`}
        >
          <Quote className="h-8 w-8 text-primary/60" />
          <blockquote className={`mt-4 text-foreground ${i === 0 ? "lg:text-xl" : "text-base"}`}>
            "{t.quote}"
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
              {t.name[0]}
            </div>
            <figcaption>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </motion.figure>
      ))}
    </motion.div>
  </Section>
);

/* ---------- FINAL CTA ---------- */
const FinalCTA = () => (
  <Section id="contacto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/80 via-background to-secondary/40 p-10 md:p-16 shadow-elegant"
    >
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent/30 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionLabel>Listo para crecer</SectionLabel>
        <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Agendá tu <span className="text-gradient">consultoría gratuita</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          30 minutos, sin compromiso. Analizamos tu negocio y te mostramos exactamente cómo
          tu web puede generar más clientes este mes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="cta" size="xl" asChild>
            <a href="#contacto">
              <Calendar className="h-5 w-5" /> Reservar mi llamada
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="mailto:hola@drevixup.com">Escribir por email</a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Sin compromiso</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Respuesta en 24h</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent" /> Plazas limitadas por mes</span>
        </div>
      </div>
    </motion.div>
  </Section>
);

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <div>
            <div className="font-bold">DrevixUp</div>
            <div className="text-xs text-muted-foreground">Webs que convierten · Argentina</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="#resultados" className="hover:text-foreground">Resultados</a>
          <a href="#proceso" className="hover:text-foreground">Proceso</a>
          <a href="#testimonios" className="hover:text-foreground">Casos</a>
          <a href="#contacto" className="hover:text-foreground">Contacto</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 DrevixUp. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

/* ---------- PAGE ---------- */
const Index = () => {
  useEffect(() => {
    document.title = "DrevixUp · Webs que convierten visitas en clientes";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Agencia de diseño y desarrollo web orientada a conversión. Creamos webs estratégicas que venden 24/7. Entrega en 1-7 días.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Solution />
        <Process />
        <Benefits />
        <Founder />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
