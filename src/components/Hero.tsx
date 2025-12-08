import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 opacity-0 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          We craft digital
          <br />
          <span className="text-primary">experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          A creative studio focused on building beautiful, functional products that help businesses grow and connect with their audience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="group">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
