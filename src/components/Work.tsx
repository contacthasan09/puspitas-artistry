import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with seamless checkout flow and real-time inventory management.',
    tags: ['Flutter', 'Node.js','MongoDB', 'Stripe', 'REST API', 'Authentication', 'Push Notifications', 'Admin Panel'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      '/projects/bag/bag1.jpg',
       '/projects/bag/bag2.jpg',
        '/projects/bag/bag3.jpg',
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
    tags: ['Flutter', 'Firebase', 'Stripe', 'Zegocloud', 'REST API', 'Authentication', 'Push Notifications', 'Calendar Integration', 'Telemedicine'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      
      '/projects/dress/dress1.jpg',
      '/projects/dress/dress2.jpg',
      '/projects/dress/dress3.jpg',



    //  '/projects/ecommerce/cart.png',
    //  '/projects/ecommerce/checkout.png',
    //  '/projects/ecommerce/admin-panel.png'
    ],
  },

  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with interactive charts, user management, and automated reporting.',
    tags: ['React', 'JavaScript', 'D3.js', 'Node.js', 'PostgreSQL', 'REST API', 'Authentication'],
    color: 'hsl(200, 80%, 50%)',
    images: [
      '/projects/glass/glass1.jpg',
    //  '/projects/saas-dashboard/users.png',
      '/projects/glass/glass2.jpg',
      '/projects/glass/glass3.jpg',
    ],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometric authentication and instant transfers.',
    tags: ['Flutter', 'Firebase', 'Plaid', 'REST API', 'Authentication', 'Payment Integration'],
    color: 'hsl(150, 60%, 45%)',
    images: [
     // '/projects/banking/login.png',
    //  '/projects/banking/dashboard.png',
    //  '/projects/banking/transfer.png',
    //  '/projects/banking/history.png',
      '/projects/paper/paper1.jpg',
      '/projects/paper/paper2.jpg',
      '/projects/paper/paper3.jpg',
      '/projects/paper/paper4.jpg',

    ],
  },
/*  {
    title: 'AI Content Studio',
    description: 'Content generation platform powered by machine learning with intuitive editing tools.',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'REST API', 'Auth System'],
    color: 'hsl(280, 70%, 55%)',
    images: [
    //  '/projects/ai/editor.png',
    //  '/projects/ai/templates.png',
    //  '/projects/ai/generate.png',
    ],
  }, */

/*{
  title: 'Social & Chat App',
  description: 'Real-time social networking app with one-to-one and group chat, media sharing, and user profiles.',
  tags: [
    'Flutter',
    'Node.js',
    'Socket.io',
    'MongoDB',
    'Firebase',
    'REST API',
    'JWT Authentication',
    'WebRTC'
  ],
  color: 'hsl(280, 70%, 55%)',
  images: [
    '/projects/social/social_1.PNG',
    '/projects/social/social_2.png',
    '/projects/social/social_3.png',
    '/projects/social/social_4.png',
  ],
}, */


 /*     {
    title: 'Ride Sharing App',
    description: 'A modern ride-sharing platform enabling users to book, manage, and track rides seamlessly',
    tags: ['Flutter', 'Firebase', 'Stripe', 'REST API', 'Authentication', 'Push Notifications', 'Real-time GPS Tracking', 'In-app Chat'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      
      '/projects/ride_sharing/ride1.jpg',
      '/projects/ride_sharing/ride3.jpg',
    //  '/projects/ecommerce/cart.png',
    //  '/projects/ecommerce/checkout.png',
    //  '/projects/ecommerce/admin-panel.png'
    ],
  }, */

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