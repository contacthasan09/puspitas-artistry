import { ExternalLink, ChevronLeft, ChevronRight, Play, Pause, Heart, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  index: number;
  images?: string[];
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  color, 
  index, 
  images = [] 
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const scrollInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll images
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlay) return;

    if (!isHoveringImage) {
      scrollInterval.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [images.length, isHoveringImage, isAutoPlay]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
      onMouseEnter={() => setIsHoveringCard(true)}
      onMouseLeave={() => setIsHoveringCard(false)}
    >
      {/* Project preview area with image carousel */}
      <div 
        className="aspect-[16/10] relative overflow-hidden"
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
      >
        {images.length > 0 ? (
          <>
            {/* Image Container with cool slide animation */}
            <div className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-full">
                {images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${title} - Image ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      idx === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>
              
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Image Navigation */}
            {images.length > 1 && (
              <>
                {/* Auto-play toggle button */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-3 left-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0"
                  title={isAutoPlay ? "Pause auto-play" : "Play auto-play"}
                >
                  {isAutoPlay ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>

                {/* Previous Button with slide animation */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Next Button with slide animation */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image Dots Indicator with bounce animation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      style={{
                        width: idx === currentImageIndex ? '12px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                      }}
                    />
                  ))}
                </div>

                {/* Image Counter with fade animation */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        ) : (
          /* Fallback gradient background with karate-themed animation */
          <div 
            className="w-full h-full flex items-center justify-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)` }}
          >
            {/* Karate belt stripes animation */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/3 left-0 w-full h-1 bg-primary transform -rotate-12 group-hover:rotate-0 transition-all duration-1000" />
              <div className="absolute bottom-1/3 left-0 w-full h-1 bg-primary transform rotate-12 group-hover:rotate-0 transition-all duration-1000" />
            </div>
            
            {/* Floating orbs */}
            <div 
              className="w-20 h-20 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-1000 absolute top-1/4 left-1/4 group-hover:scale-150 group-hover:translate-x-4"
              style={{ background: color }}
            />
            <div 
              className="w-16 h-16 rounded-full opacity-30 group-hover:opacity-40 transition-all duration-700 absolute bottom-1/4 right-1/4 group-hover:scale-125 group-hover:-translate-x-3"
              style={{ background: color }}
            />
            
            {/* Main orb with karate fist symbol */}
            <div 
              className="w-20 h-20 rounded-full relative z-10 group-hover:scale-110 transition-all duration-500 flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
                boxShadow: `0 10px 30px ${color}40`
              }}
            >
              <span className="text-3xl text-white/90">🥋</span>
            </div>
          </div>
        )}

        {/* Project action buttons */}
        <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-4 ${
          isHoveringCard && !isHoveringImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            title="View Project"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            title="Learn More"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content with slide-up animation on hover */}
      <div className="p-6 relative overflow-hidden">
        {/* Animated underline effect */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-all duration-500" />
        
        {/* Category indicator badge */}
        <div className="flex items-center gap-2 mb-2">
          {title.includes('Karate') || title.includes('Tournament') ? (
            <span className="text-xs px-2 py-0.5 bg-red-500/10 text-red-500 rounded-full border border-red-500/20">🥋 Karate</span>
          ) : title.includes('Social') || title.includes('Fresh Anonna') ? (
            <span className="text-xs px-2 py-0.5 bg-pink-500/10 text-pink-500 rounded-full border border-pink-500/20">❤️ Social Work</span>
          ) : title.includes('Student') || title.includes('Academic') ? (
            <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">📚 Academic</span>
          ) : title.includes('Travel') ? (
            <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">✈️ Travel</span>
          ) : null}
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 hover:scale-105 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

export default ProjectCard;