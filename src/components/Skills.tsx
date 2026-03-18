import { Target, Award, Heart, Users, Eye, Shield, Trophy, GraduationCap, Globe, Activity, Feather, Layers } from 'lucide-react';

const skills = [
  {
    icon: Shield,
    title: 'Karate (Kata & Kumite)',
    description: 'National-level competitor with expertise in both kata (forms) and kumite (sparring), representing Bangladesh with pride.',
    category: 'karate'
  },
  {
    icon: Users,
    title: 'Karate Coach',
    description: 'Dedicated coach training the next generation of martial artists, focusing on discipline, technique, and mental strength.',
    category: 'coaching'
  },
  {
    icon: Award,
    title: 'Competition Ready',
    description: 'Mental conditioning and physical training for national championships and high-stakes tournaments.',
    category: 'karate'
  },
  {
    icon: Heart,
    title: 'Social Work',
    description: 'Active volunteer with Fresh Anonna, working on community service projects and youth empowerment initiatives.',
    category: 'social'
  },
  {
    icon: Eye,
    title: 'Mental Focus',
    description: 'Zen-like concentration developed through years of martial arts training, blocking out distractions under pressure.',
    category: 'karate'
  },
  {
    icon: GraduationCap,
    title: 'University Student',
    description: 'Pursuing higher education at Daffodil International University, balancing academics with athletic excellence.',
    category: 'academic'
  },
  {
    icon: Trophy,
    title: 'National Athlete',
    description: 'Proudly representing Bangladesh in national karate tournaments with discipline, dedication, and sportsmanship.',
    category: 'karate'
  },
  {
    icon: Globe,
    title: 'Travel Explorer',
    description: 'Passionate explorer who believes the best lessons happen outside comfort zones, discovering new cultures and places.',
    category: 'lifestyle'
  },
  {
    icon: Activity,
    title: 'Physical Fitness',
    description: 'Maintaining peak physical condition through rigorous training, strength conditioning, and wellness practices.',
    category: 'karate'
  },
  {
    icon: Feather,
    title: 'Leadership',
    description: 'Guiding and inspiring others both in the dojo and in community service projects.',
    category: 'coaching'
  },
  {
    icon: Layers,
    title: 'Community Building',
    description: 'Creating connections and fostering growth within local communities through social work and youth programs.',
    category: 'social'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Strategic approach to setting and achieving goals in sports, academics, and personal development.',
    category: 'academic'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-primary/5 rounded-full" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary/20 rounded-full animate-pulse delay-700" />
        
        {/* Karate belt stripes */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-primary/5 transform -rotate-6" />
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-primary/5 transform rotate-6" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Multifaceted Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Strength That{' '}
            <span className="text-gradient">Serves</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Athlete. Coach. Student. Social Worker. Explorer. — One heart, many passions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-foreground">🥋 Karate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/80 rounded-full" />
            <span className="text-sm font-semibold text-foreground">👥 Coaching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/60 rounded-full" />
            <span className="text-sm font-semibold text-foreground">❤️ Social Work</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/40 rounded-full" />
            <span className="text-sm font-semibold text-foreground">📚 Academic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/20 rounded-full" />
            <span className="text-sm font-semibold text-foreground">✈️ Lifestyle</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group p-8 rounded-lg bg-background border transition-all duration-500 hover:-translate-y-2 ${
                skill.category === 'karate' 
                  ? 'border-primary/30 hover:border-primary/70 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]' 
                  : skill.category === 'coaching'
                  ? 'border-primary/20 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]'
                  : skill.category === 'social'
                  ? 'border-primary/20 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]'
                  : skill.category === 'academic'
                  ? 'border-primary/20 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                  : 'border-primary/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative mb-6">
                {/* Icon with category indicator */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  skill.category === 'karate' 
                    ? 'bg-red-500/15 text-red-500' 
                    : skill.category === 'coaching'
                    ? 'bg-orange-500/15 text-orange-500'
                    : skill.category === 'social'
                    ? 'bg-pink-500/15 text-pink-500'
                    : skill.category === 'academic'
                    ? 'bg-blue-500/15 text-blue-500'
                    : 'bg-green-500/15 text-green-500'
                }`}>
                  <skill.icon className="h-7 w-7" />
                </div>
                
                {/* Category badge */}
                <span className={`absolute -top-2 -right-2 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                  skill.category === 'karate'
                    ? 'bg-red-500/20 text-red-500 border border-red-500/30'
                    : skill.category === 'coaching'
                    ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                    : skill.category === 'social'
                    ? 'bg-pink-500/20 text-pink-500 border border-pink-500/30'
                    : skill.category === 'academic'
                    ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                    : 'bg-green-500/20 text-green-500 border border-green-500/30'
                }`}>
                  {skill.category === 'karate' && '🥋'}
                  {skill.category === 'coaching' && '👥'}
                  {skill.category === 'social' && '❤️'}
                  {skill.category === 'academic' && '📚'}
                  {skill.category === 'lifestyle' && '✈️'}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
              
              {/* Decorative hover line */}
              <div className={`w-0 h-0.5 mt-4 transition-all duration-300 group-hover:w-12 ${
                skill.category === 'karate' 
                  ? 'bg-red-500' 
                  : skill.category === 'coaching'
                  ? 'bg-orange-500'
                  : skill.category === 'social'
                  ? 'bg-pink-500'
                  : skill.category === 'academic'
                  ? 'bg-blue-500'
                  : 'bg-green-500'
              }`} />
            </div>
          ))}
        </div>
        
        {/* Stats line */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 px-8 rounded-full bg-background border border-border">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">12+ National Medals</span>
            </div>
            <div className="w-1 h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">50+ Students Trained</span>
            </div>
            <div className="w-1 h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">25+ Social Events</span>
            </div>
            <div className="w-1 h-4 bg-border" />
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">DIU Student</span>
            </div>
          </div>
        </div>
        
        {/* Fresh Anonna highlight */}
        <div className="mt-8 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Heart className="h-4 w-4" />
            <span>Making a difference with</span>
            <span className="font-semibold text-primary">Fresh Anonna</span>
            <span>→</span>
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;