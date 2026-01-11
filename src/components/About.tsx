import { useEffect, useRef, useState } from 'react';

const About = () => {
  const profileImage = '/images/profile.jpg'; // Update this path
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countedStats, setCountedStats] = useState({ years: 0, projects: 0, clients: 0 });

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

    const targetStats = { years: 3, projects: 35, clients: 25 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountedStats({
        years: Math.floor(targetStats.years * progress),
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress)
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
                    alt="Profile"
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
                      <span className="font-display text-5xl text-primary">MH</span>
                      
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" />
                    </div>
                  </div>
                </>
              )}

              {/* Floating particles animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
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
              Turning Ideas Into{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                Digital Reality
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                "With over 3 years of experience in full-stack and cross-platform app development, I've had the privilege of working with startups, agencies, and established brands to bring their digital visions to life across web, mobile, and desktop platforms.",
                "I believe great backend architecture is invisible — it feels intuitive, seamless, and delightful. My approach combines impressive UI/UX design with robust backend engineering, ensuring every application not only looks stunning but performs flawlessly at scale.",
                "When I'm not coding, you'll find me exploring new backend technologies, contributing to open-source projects, or enjoying a good cup of coffee while architecting new database schemas."
              ].map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'Full-Stack Development',
                'Cross-Platform Apps',
                'Backend Architecture',
                'UI/UX Design',
                'Real-time Systems',
                'API Development',
                'Database Design',
                'Cloud Deployment',
                'Maps Integration',
                'Secure Payment Integrations'
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
                  {countedStats.years}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.projects}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.clients}+
                </p>
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