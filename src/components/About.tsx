import { useEffect, useRef, useState } from 'react';

const About = () => {
  const profileImage = '/images/mitu-profile.jpeg'; // Update this path
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countedStats, setCountedStats] = useState({ medals: 0, students: 0, events: 0 });

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

    const targetStats = { medals: 12, students: 50, events: 25 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountedStats({
        medals: Math.floor(targetStats.medals * progress),
        students: Math.floor(targetStats.students * progress),
        events: Math.floor(targetStats.events * progress)
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
        
        {/* Karate-inspired decorative elements */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 border-2 border-primary/10 rounded-full transition-all duration-1500 ${
          isVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
        }`}>
          <div className="absolute inset-8 border-2 border-primary/10 rounded-full" />
          <div className="absolute inset-16 border-2 border-primary/5 rounded-full" />
        </div>
        
        {/* Martial arts stripes */}
        <div className={`absolute top-1/3 left-1/4 w-32 h-1 bg-primary/10 transform rotate-45 transition-all duration-1000 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`} />
        <div className={`absolute bottom-1/3 right-1/4 w-32 h-1 bg-primary/10 transform -rotate-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`} />
        
        {/* World map subtle overlay for travel */}
        <div className={`absolute inset-0 bg-[url('/world-map-dots.svg')] bg-repeat opacity-5 transition-all duration-1500 ${
          isVisible ? 'opacity-10' : 'opacity-0'
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
                    alt="Nurun Nahar Mitu - National Karate Player & Social Worker"
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
                      <span className="font-display text-5xl text-primary">NM</span>
                      
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" />
                    </div>
                  </div>
                </>
              )}

              {/* Floating particles animation - martial arts and travel themed */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`strike-${i}`}
                    className="absolute text-primary/20 text-xs animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + Math.random() * 3}s`
                    }}
                  >
                    ⚡
                  </div>
                ))}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`globe-${i}`}
                    className="absolute text-primary/20 text-xs animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${5 + Math.random() * 4}s`
                    }}
                  >
                    🌍
                  </div>
                ))}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`heart-${i}`}
                    className="absolute text-primary/20 text-xs animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${3 + Math.random() * 3}s`
                    }}
                  >
                    ❤️
                  </div>
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
              Strength That{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                Serves Others
              </span>
            </h2>
            
            <div className="space-y-6">
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                I am <span className="text-foreground font-semibold">Nurun Nahar Mitu</span> — a National Karate Player representing Bangladesh, a dedicated coach shaping the next generation of martial artists, and a student at Daffodil International University. But beyond the titles, I'm someone who believes that true strength is measured by how we lift others.
              </p>
              
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                As a social worker with <span className="text-primary font-medium">Fresh Anonna</span>, I've learned that the same discipline I practice in the dojo applies to life — showing up, giving your best, and making a difference. Whether I'm teaching a young student their first kick or helping communities in need, my purpose remains the same: to empower.
              </p>
              
              <p 
                className={`text-muted-foreground font-body leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                When I'm not training, coaching, or studying, you'll find me exploring new places — because I believe the best lessons happen outside comfort zones. Every journey, every competition, every act of service adds another layer to who I am: a fighter, a teacher, a student, and a dreamer.
              </p>
            </div>

            {/* Skills tags - multiple categories */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 font-semibold">
                🥋 Karate
              </span>
              {[
                'National Player',
                'Karate Coach',
                'Competition Ready',
                'Kata & Kumite',
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
                📚 Academic
              </span>
              {[
                'DIU Student',
                
                'Leadership',
                'Research',
                'Campus Activities'
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
                ❤️ Social Impact
              </span>
              {[
                'Fresh Anonna',
                'Community Service',
                'Youth Empowerment',
                'Volunteer',
                'Social Worker'
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
                ✈️ Lifestyle
              </span>
              {[
                'Travel Explorer',
                'Adventure Seeker',
                'Nature Lover',
                'Culture Enthusiast',
                'Photography'
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
                  {countedStats.students}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary font-semibold">
                  {countedStats.events}+
                </p>
                <p className="text-muted-foreground text-sm mt-1">Social Events</p>
              </div>
            </div>
            
            {/* Fresh Anonna link */}
            <div 
              className={`mt-6 text-center transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <a 
                href="https://web.facebook.com/freshanonna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-sm">Making a difference with</span>
                <span className="font-semibold">Fresh Anonna</span>
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