import { Palette, Code, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    description: "Beautiful interfaces that engage users and communicate your brand with clarity and purpose.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean, performant code that brings designs to life with smooth interactions and reliability.",
  },
  {
    icon: Megaphone,
    title: "Strategy",
    description: "Thoughtful planning and research to ensure your product resonates with your target audience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a full range of services to help you build and launch your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
