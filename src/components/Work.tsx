import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with seamless checkout flow and real-time inventory management.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: 'hsl(38, 92%, 50%)',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with interactive charts, user management, and automated reporting.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    color: 'hsl(200, 80%, 50%)',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometric authentication and instant transfers.',
    tags: ['React Native', 'Firebase', 'Plaid'],
    color: 'hsl(150, 60%, 45%)',
  },
  {
    title: 'AI Content Studio',
    description: 'Content generation platform powered by machine learning with intuitive editing tools.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    color: 'hsl(280, 70%, 55%)',
  },

];

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Projects I'm{' '}
            <span className="text-gradient">Proud Of</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              color={project.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
