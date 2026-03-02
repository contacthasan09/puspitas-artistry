import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          PH
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="nav"
              onClick={() => scrollToSection(link.href)}
              className="text-sm uppercase tracking-widest"
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="nav"
                onClick={() => scrollToSection(link.href)}
                className="text-lg justify-start"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
