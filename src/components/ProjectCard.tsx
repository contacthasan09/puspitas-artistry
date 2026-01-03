import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, color, index }: ProjectCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Project preview area */}
      <div 
        className="aspect-[16/10] relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-16 h-16 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-500"
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)` }}
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
