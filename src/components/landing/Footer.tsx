import { Logo } from "./Nav";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <div>
            <div className="font-bold">DrevixUp</div>
            <div className="text-xs text-muted-foreground">Sistema de Conversión con IA</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="#system" className="hover:text-foreground transition-colors">Sistema</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Beneficios</a>
          <a href="#cta-final" className="hover:text-foreground transition-colors">Comenzar</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 DrevixUp. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
