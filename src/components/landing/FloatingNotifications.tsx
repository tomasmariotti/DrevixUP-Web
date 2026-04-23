import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquare, Mail, Zap } from "lucide-react";

interface Notification {
  id: number;
  icon: typeof CheckCircle2;
  text: string;
  accent: string;
  iconBg: string;
}

const NOTIFICATIONS: Omit<Notification, "id">[] = [
  {
    icon: Zap,
    text: "Nuevo lead capturado",
    accent: "neon-notif-blue",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: MessageSquare,
    text: "Respuesta IA enviada",
    accent: "neon-notif-purple",
    iconBg: "bg-[hsl(270_80%_65%/0.2)] text-[hsl(270_80%_65%)]",
  },
  {
    icon: Mail,
    text: "Seguimiento activado",
    accent: "neon-notif-amber",
    iconBg: "bg-[hsl(45_90%_55%/0.2)] text-[hsl(45_90%_55%)]",
  },
  {
    icon: CheckCircle2,
    text: "Conversión completada",
    accent: "neon-notif-green",
    iconBg: "bg-accent/20 text-accent",
  },
];

const FloatingNotifications = () => {
  const [active, setActive] = useState<Notification | null>(null);
  const counterRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const show = () => {
      const idx = counterRef.current % NOTIFICATIONS.length;
      counterRef.current++;
      setActive({ ...NOTIFICATIONS[idx], id: counterRef.current });

      // Hide after 3.5s
      timeoutRef.current = setTimeout(() => {
        setActive(null);
      }, 3500);
    };

    // First notification after 4s
    const initialDelay = setTimeout(() => {
      show();
      // Then every 7s
      const interval = setInterval(show, 7000);
      return () => clearInterval(interval);
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="floating-notif-container" aria-live="polite">
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 80, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 60, scale: 0.9, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`floating-notif ${active.accent}`}
          >
            <div className={`floating-notif-icon ${active.iconBg}`}>
              <active.icon className="h-4 w-4" />
            </div>
            <div className="floating-notif-content">
              <span className="floating-notif-text">{active.text}</span>
              <span className="floating-notif-time">Ahora mismo</span>
            </div>
            {/* Progress bar that animates over 3.5s */}
            <motion.div
              className="floating-notif-progress"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNotifications;
