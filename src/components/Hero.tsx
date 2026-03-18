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
      {/* Background glow effect - Karate inspired colors (deeper reds/oranges) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0,85%,50%,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(0,85%,50%,0.05)_0%,transparent_50%)]" />
      
      {/* Subtle karate belt pattern in background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-primary/30 transform -rotate-12" />
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-primary/30 transform rotate-12" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up stagger-1">
            Strength. Discipline. Spirit.
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-2">
            <span className="text-foreground">I'm</span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nurun Nahar Mitu
            </span>
          </h1>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up stagger-3">
            University student by day, National Karate Player representing Bangladesh with pride. 
            I believe in the power of discipline — in the dojo and in the classroom.
          </p>
          
          <p className="font-display text-2xl md:text-3xl text-gradient bg-gradient-to-r from-primary/80 to-primary font-medium mb-12 opacity-0 animate-fade-up stagger-3">
            Training hard. Dreaming bigger.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })}
            >
              My Journey
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect With Me
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