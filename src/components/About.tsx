const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-card relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-display text-5xl text-primary">JD</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-lg -z-10" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Turning Ideas Into{' '}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                With over 5 years of experience in web development and design, I've had 
                the privilege of working with startups, agencies, and established brands 
                to bring their digital visions to life.
              </p>
              <p>
                I believe great design is invisible — it feels intuitive, seamless, and 
                delightful. My approach combines aesthetic sensibility with technical 
                precision, ensuring every project not only looks stunning but performs 
                flawlessly.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while sketching new ideas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-4xl text-primary font-semibold">5+</p>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary font-semibold">50+</p>
                <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary font-semibold">30+</p>
                <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
