const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-xl font-semibold text-foreground tracking-tight">
            studio<span className="text-primary">.</span>
          </a>

          <nav className="flex items-center gap-8">
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

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
