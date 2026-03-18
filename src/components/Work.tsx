import ProjectCard from '@/components/ProjectCard';
import { Heart } from 'lucide-react';

const projects = [
  {
    title: 'National Karate Journey',
    description: 'Representing Bangladesh on the national stage — moments of strength, discipline, and passion captured in action. Every kata and kumite tells a story of dedication.',
    tags: ['National Athlete', 'Karate', 'Kata', 'Kumite', 'Team Bangladesh', 'Competition'],
    color: 'hsl(0, 85%, 50%)',
    images: [
      '/projects/karate/karate1.jpeg',
      '/projects/karate/karate2.jpeg',
      '/projects/karate/karate3.jpeg',
       '/projects/karate/karate4.jpeg',
    ],
  },
  {
    title: 'Karate Coaching & Mentoring',
    description: 'Training the next generation of martial artists — sharing discipline, technique, and the values of respect and perseverance with young athletes.',
    tags: ['Karate Coach', 'Mentoring', 'Youth Development', 'Martial Arts', 'Discipline', 'Training'],
    color: 'hsl(25, 95%, 53%)',
    images: [
      '/projects/coaching/coach1.jpeg',
      '/projects/coaching/coach2.jpeg',
      
      '/projects/coaching/coach3.jpeg',
      '/projects/coaching/coach4.jpeg',
    ],
  },
  {
    title: 'Fresh Anonna - Social Work',
    description: 'Making a difference through community service — volunteering, youth empowerment, and creating positive change in local communities.',
    tags: ['Social Work', 'Fresh Anonna', 'Community Service', 'Volunteer', 'Youth Empowerment', 'Bangladesh'],
    color: 'hsl(330, 85%, 55%)',
    images: [
      '/projects/social/social1.jpeg',
      '/projects/social/social2.jpeg',
      '/projects/social/social3.jpeg',
    ],
  },
  {
    title: 'Daffodil University Life',
    description: 'Balancing academics with athletic excellence — student life at DIU, campus activities, and the journey of higher education.',
    tags: ['DIU', 'University Student', 'Business Studies', 'Campus Life', 'Academic', 'Leadership'],
    color: 'hsl(210, 90%, 50%)',
    images: [
      '/projects/university/uni1.jpeg',
      '/projects/university/uni2.jpeg',
      '/projects/university/uni3.jpeg',
    ],
  },
  {
    title: 'Travel & Exploration',
    description: 'Exploring new places, discovering cultures, and finding inspiration beyond the dojo and classroom. Every journey adds a new perspective.',
    tags: ['Travel', 'Explorer', 'Adventure', 'Nature', 'Photography', 'Culture'],
    color: 'hsl(160, 90%, 40%)',
    images: [
      '/projects/travel/travel1.jpeg',
      '/projects/travel/travel2.jpeg',
      '/projects/travel/travel3.jpeg',
    ],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      {/* Background decoration - karate and social work themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        
        {/* Karate belt stripes */}
        <div className="absolute top-1/3 left-0 w-full h-1 bg-primary/5 transform -rotate-6" />
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-primary/5 transform rotate-6" />
        
        {/* Floating elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-float"
            style={{
              left: `${5 + (i * 20)}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }}
          >
            {i % 2 === 0 ? '🥋' : '❤️'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            My Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Strength That{' '}
            <span className="text-gradient bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Serves
            </span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Athlete. Coach. Social Worker. Student. Explorer. — Every role tells a story.
          </p>
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

        {/* Call to action for Fresh Anonna */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 px-8 rounded-full bg-background border border-border">
            <span className="text-muted-foreground">Making a difference with</span>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              <Heart className="h-4 w-4 fill-primary/20" />
              Fresh Anonna
            </a>
            <span className="text-primary text-lg">→</span>
          </div>
          
          {/* Social media follow */}
          <div className="mt-4 text-sm text-muted-foreground">
            <span>Follow my journey on </span>
            <a 
              href="https://web.facebook.com/nurun.nahar.mitu.637805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;