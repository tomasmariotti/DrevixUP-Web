import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/landing/ThemeToggle";
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
          <a href="#system" className="nav-link transition-colors hover:text-foreground">Sistema</a>
          <a href="#benefits" className="nav-link transition-colors hover:text-foreground">Beneficios</a>
          <a href="#cta-final" className="nav-link transition-colors hover:text-foreground">Comenzar</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="hero" size="sm" asChild>
            <a href="#cta-final">
              Activar mi sistema <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
export { Logo };
