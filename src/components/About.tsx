const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building products that
              <br />
              <span className="text-primary">matter</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We're a small team of designers and developers passionate about creating digital experiences that make a difference. We believe in simplicity, attention to detail, and putting users first.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every project we take on is an opportunity to push boundaries and deliver something truly exceptional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects completed</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">5y</div>
              <div className="text-muted-foreground">Years of experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Happy clients</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
