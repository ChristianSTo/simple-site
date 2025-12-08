import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold text-foreground tracking-tight">
          studio<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <Button size="sm" className="hidden md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
