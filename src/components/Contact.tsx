import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Let's Work{' '}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Drop me a message 
              and let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <a 
                    href="mailto:hello@johndoe.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@johndoe.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">Find me on</p>
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
