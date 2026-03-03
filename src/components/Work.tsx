import ProjectCard from '@/components/ProjectCard';

const projects = [
  
  
{
  title: 'National Archery Journey',
  description: 'Representing Bangladesh on the national stage — moments of focus, precision, and passion captured in action. Every arrow tells a story of dedication and discipline.',
  tags: ['National Athlete', 'Compound Bow', 'Competition', 'Team Bangladesh', 'Precision Sport', 'Archery'],
  color: 'hsl(38, 92%, 50%)',
  images: [
    '/projects/archery/archery1.jpeg',
    '/projects/archery/archery2.jpeg',
  ],
},

  {
    title: 'Hand-Painted Dress Collection',
    description: 'Wearable art pieces where fabric becomes a canvas. Each dress features original hand-drawn motifs, cultural patterns, and artistic expressions.',
    tags: ['Textile Art', 'Fabric Painting', 'Wearable Art', 'Hand Illustration', 'Custom Fashion', 'ArtCraft'],
    color: 'hsl(38, 92%, 50%)',
    images: [
      '/projects/dress/dress1.jpg',
      '/projects/dress/dress2.jpg',
      '/projects/dress/dress3.jpg',
    ],
  },
  {
    title: 'Painted Eyewear Collection',
    description: 'Unique artistic frames where glass becomes a medium. Hand-painted designs on eyewear — from delicate florals to abstract expressions.',
    tags: ['Glass Painting', 'Eyewear Art', 'Detail Work', 'Precision Art', 'Mixed Media', 'Custom Design'],
    color: 'hsl(200, 80%, 50%)',
    images: [
      '/projects/glass/glass1.jpg',
      '/projects/glass/glass2.jpg',
      '/projects/glass/glass3.jpg',
    ],
  },
  {
    title: 'Paper Art Collection',
    description: 'Delicate handprint art on paper — where simplicity meets creativity. Each piece tells a story through strokes, textures, and emotions.',
    tags: ['Paper Art', 'Handprint', 'Illustration', 'Sketch Art', 'Mixed Media', 'Minimalist'],
    color: 'hsl(150, 60%, 45%)',
    images: [
      '/projects/paper/paper1.jpg',
      '/projects/paper/paper2.jpg',
      '/projects/paper/paper3.jpg',
      '/projects/paper/paper4.jpg',
    ],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      {/* Artistic background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating paint drops */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Artwork Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Creativity{' '}
            <span className="text-gradient">On Canvas</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Each piece is handcrafted with love — from bags to paper, every stroke tells a story.
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

        {/* Call to action for Puspita's Artistry */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 p-4 px-8 rounded-full bg-background border border-border">
            <span className="text-muted-foreground">Follow more creations at</span>
            <a 
              href="https://facebook.com/PuspatasArtistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Puspita's Artistry
            </a>
            <span className="text-primary text-lg">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;