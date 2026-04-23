import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          <p className="hidden text-sm text-muted-foreground sm:block">
            ¿Listo para convertir tu tráfico en clientes?
          </p>
          <Button variant="hero" size="sm" asChild>
            <a href="#cta-final">
              <Zap className="h-4 w-4" /> Activar mi sistema
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
