import { Code2, Palette, Zap, Globe, Database, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Vue.js, and modern CSS frameworks.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, design systems, user research, and prototyping.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB, and RESTful APIs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, and progressive web applications.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Core Web Vitals, optimization, caching, and accessibility.',
  },
  {
    icon: Globe,
    title: 'DevOps',
    description: 'Docker, AWS, CI/CD pipelines, and cloud infrastructure.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Skills &{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
