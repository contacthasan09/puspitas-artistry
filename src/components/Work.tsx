import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with seamless checkout flow and real-time inventory management.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      '/projects/ecommerce-platform/ecommerce1.jpg',
       '/projects/ecommerce-platform/ecommerce2.jpg',
        '/projects/ecommerce-platform/ecommerce3.jpg',
      //  '/projects/ecommerce/dashboard.png',
    //  '/projects/ecommerce/product-page.png',
    //  '/projects/ecommerce/cart.png',
    //  '/projects/ecommerce/checkout.png',
    //  '/projects/ecommerce/admin-panel.png'
    ],
  },

    {
    title: 'Doctor Appointment Booking',
    description: 'A modern healthcare platform enabling patients to book, manage, and track medical appointments seamlessly',
    tags: ['Fluter', 'Node.js', 'Stripe', 'MongoDB'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      
      '/projects/appointment/appointment_screen1.png',
      '/projects/appointment/appointment_screen2.png',
    //  '/projects/ecommerce/cart.png',
    //  '/projects/ecommerce/checkout.png',
    //  '/projects/ecommerce/admin-panel.png'
    ],
  },

  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with interactive charts, user management, and automated reporting.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    color: 'hsl(200, 80%, 50%)',
    images: [
      '/projects/saas-dashboard/analytics.png',
    //  '/projects/saas-dashboard/users.png',
      '/projects/saas-dashboard/reports.png',
    ],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometric authentication and instant transfers.',
    tags: ['React Native', 'Firebase', 'Plaid'],
    color: 'hsl(150, 60%, 45%)',
    images: [
     // '/projects/banking/login.png',
    //  '/projects/banking/dashboard.png',
    //  '/projects/banking/transfer.png',
    //  '/projects/banking/history.png',
      '/projects/banking/banking1.png',
      '/projects/banking/banking2.png',
      '/projects/banking/banking3.png',
      '/projects/banking/banking4.png',

    ],
  },
  {
    title: 'AI Content Studio',
    description: 'Content generation platform powered by machine learning with intuitive editing tools.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    color: 'hsl(280, 70%, 55%)',
    images: [
    //  '/projects/ai/editor.png',
    //  '/projects/ai/templates.png',
    //  '/projects/ai/generate.png',
    ],
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
              images={project.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;