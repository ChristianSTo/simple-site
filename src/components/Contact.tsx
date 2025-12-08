import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's work together
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing.
        </p>

        <Button size="lg" className="group">
          Send us an email
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Contact;
