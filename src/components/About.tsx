import { useEffect, useRef, useState } from 'react';

const About = () => {
  const profileImage = '/images/puspita-profile.jpg'; // Update this path
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countedStats, setCountedStats] = useState({ medals: 0, creations: 0, years: 0 });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count-up animation for stats
  useEffect(() => {
    if (!isVisible) return;

    const targetStats = { medals: 15, creations: 50, years: 6 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountedStats({
        medals: Math.floor(targetStats.medals * progress),
        creations: Math.floor(targetStats.creations * progress),
        years: Math.floor(targetStats.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedStats(targetStats);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-x-40'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 -translate-x-40'
        }`} />
        
        {/* Archery target decorative element */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 border-2 border-primary/10 rounded-full transition-all duration-1500 ${
          isVisible ? 'scale-100 opacity-30' : 'scale-0 opacity-0'
        }`}>
          <div className="absolute inset-4 border-2 border-primary/10 rounded-full" />
          <div className="absolute inset-8 border-2 border-primary/10 rounded-full" />
          <div className="absolute inset-12 border-2 border-primary/20 rounded-full" />
          <div className="absolute inset-16 border-2 border-primary/30 rounded-full" />
        </div>
        
        {/* Paint splash decorative element */}
        <div className={`absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
          isVisible ? 'scale-100 opacity-40' : 'scale-0 opacity-0'
        }`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-card relative group">
              {profileImage ? (
                <>
                  <img
                    src={profileImage}
                    alt="Puspita Hasan - National Archery Player & Artist"
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    } group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </>
              ) : (
                <>
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Floating initials with pulse animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`relative w-32 h-32 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-1000 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    } group-hover:scale-110`}>
                      <span className="font-display text-5xl text-primary">PH</span>
                      
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" />
                    </div>
                  </div>
                </>
              )}

              {/* Floating particles animation - arrows and paint drops */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`arrow-${i}`}
                    className="absolute text-primary/20 text-xs animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + Math.random() * 3}s`
                    }}
                  >
                    ➜
                  </div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`paint-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Animated decorative elements */}
            <div 
              className={`absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30 rounded-lg -z-10 transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-10 translate-y-10 opacity-0'
              }`}
            />
            <div 
              className={`absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-lg -z-10 transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-10 -translate-y-10 opacity-0'
              }`}
            />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p 
              className={`text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              About Me
            </p>
            
            <h2 
              className={`font-display text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Where Precision Meets{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                Creativity
              </span>
            </h2>
            
            <div className="space-y-6">
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                I am Puspita Zaman — a National Archery Player representing Bangladesh, and a Creative Artist pouring my soul into handprint art and crafts. Two worlds, one heart. On the field, I chase the perfect shot with unwavering focus. In my studio, I chase the perfect stroke, leaving fragments of my imagination on canvas.
              </p>
              
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                My journey is a beautiful paradox — the stillness before releasing an arrow mirrors the pause before my brush meets the canvas. Through <span className="text-primary font-medium">Puspita's Artistry</span>, I share handcrafted pieces that carry the rawness of human touch and the elegance of artistic expression.
              </p>
              
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                When I'm not training for national championships or creating new artwork, you'll find me exploring new art techniques, connecting with fellow creators, or simply enjoying a quiet moment with a cup of tea — because every masterpiece begins with a moment of peace.
              </p>
            </div>

            {/* Skills tags - dual categories */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 font-semibold">
                ⚡ Archery
              </span>
              {[
                'National Player',
                'Precision Shooting',
                'Competition Ready',
                'Mental Focus',
                'Team Bangladesh'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/15 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 font-semibold">
                🎨 Artistry
              </span>
              {[
                'Handprint Art',
                'Mixed Media',
                'ArtCraft',
                'Custom Creations',
                'Puspita\'s Artistry'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/15 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Animated stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.medals}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">National Medals</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.creations}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Art Creations</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.years}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Years of Passion</p>
              </div>
            </div>
            
            {/* Facebook page link */}
            <div 
              className={`mt-6 text-center transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <a 
                href="https://www.facebook.com/PuspitaZaman.2360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-sm">Follow my journey on</span>
                <span className="font-semibold">Puspita's Artistry</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;