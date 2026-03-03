import { Target, Brush, Award, Heart, Eye, Sparkles, Trophy, Palette, Star, Activity, Feather, Layers } from 'lucide-react';

const skills = [
  {
    icon: Target,
    title: 'Precision Archery',
    description: 'National-level competitive archery with expert precision, focus, and consistency under pressure.',
    category: 'archery'
  },
  {
    icon: Brush,
    title: 'Handprint Art',
    description: 'Unique handprint techniques creating expressive, personal artwork that captures emotion and rawness.',
    category: 'art'
  },
  {
    icon: Award,
    title: 'Competition Ready',
    description: 'Mental conditioning and physical training for national championships and high-stakes tournaments.',
    category: 'archery'
  },
  {
    icon: Heart,
    title: 'Mixed Media Art',
    description: 'Combining textures, colors, and materials to create depth and storytelling in every piece.',
    category: 'art'
  },
  {
    icon: Eye,
    title: 'Pinpoint Focus',
    description: 'Zen-like concentration developed through years of aiming for the bullseye, block out distractions.',
    category: 'archery'
  },
  {
    icon: Sparkles,
    title: 'ArtCraft Design',
    description: 'Handcrafted creations from concept to completion, each piece carrying a unique narrative.',
    category: 'art'
  },
  {
    icon: Trophy,
    title: 'National Athlete',
    description: 'Proudly representing Bangladesh in national archery tournaments with discipline and dedication.',
    category: 'archery'
  },
  {
    icon: Feather,
    title: 'Fluid Expression',
    description: 'Translating emotions into visual art through intuitive strokes and organic compositions.',
    category: 'art'
  },
  {
    icon: Layers,
    title: 'Creative Vision',
    description: 'Seeing beauty in imperfection and transforming simple ideas into captivating visual stories.',
    category: 'art'
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
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Dual Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Where <span className="text-gradient">Athlete</span> Meets{' '}
            <span className="text-gradient">Artist</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            The bullseye and the canvas — two worlds mastered by one heart.
          </p>
        </div>

        {/* Category Tabs (visual separation without actual tabs) */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-foreground">Archery Excellence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/60 rounded-full" />
            <span className="text-sm font-semibold text-foreground">Artistic Expression</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group p-8 rounded-lg bg-background border transition-all duration-500 hover:-translate-y-2 ${
                skill.category === 'archery' 
                  ? 'border-primary/20 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]' 
                  : 'border-primary/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]'
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
                  skill.category === 'archery' 
                    ? 'bg-primary/15 text-primary' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  <skill.icon className="h-7 w-7" />
                </div>
                
                {/* Category badge */}
                <span className={`absolute -top-2 -right-2 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                  skill.category === 'archery'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-primary/10 text-primary/80 border border-primary/20'
                }`}>
                  {skill.category === 'archery' ? '⚡ Sport' : '🎨 Art'}
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
                skill.category === 'archery' ? 'bg-primary' : 'bg-primary/60'
              }`} />
            </div>
          ))}
        </div>
        
        {/* Stats line */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-4 px-8 rounded-full bg-background border border-border">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">15+ National Medals</span>
            </div>
            <div className="w-1 h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">50+ Art Creations</span>
            </div>
            <div className="w-1 h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Puspita's Artistry</span>
            </div>
          </div>
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