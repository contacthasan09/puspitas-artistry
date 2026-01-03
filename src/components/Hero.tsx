import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38,92%,50%,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(38,92%,50%,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up stagger-1">
            Creative Developer & Designer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-2">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="text-gradient">John Doe</span>
          </h1>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up stagger-3">
            I craft digital experiences that blend beautiful design with clean, 
            efficient code. Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
