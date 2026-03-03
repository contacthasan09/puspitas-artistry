import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, Facebook, Instagram, Target, Globe, Heart } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact info
  const emailAddress = 'mail-puspitazaman15@gmail.com';
  const location = 'Tongi, Gazipur, Bangladesh';

  // Social links with Puspita's actual URLs
  const socialLinks = {
    facebook: 'https://www.facebook.com/aona.khan.39',
    instagram: 'https://instagram.com/puspita_60.60',
    worldArchery: 'https://www.worldarchery.sport/profile/41840/puspita-zaman/statistics?category=Compound%20Women',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree (Free service for form submissions)
      const response = await fetch('https://formspree.io/f/mbdlpwwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from ${formData.name} - Puspita's Portfolio`,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try emailing me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to open email client
  const openEmailClient = () => {
    const subject = 'Art/Archery Inquiry - Puspita\'s Portfolio';
    const body = `Hello Puspita,\n\nI came across your portfolio and would like to discuss...\n\nBest regards,\n[Your Name]`;
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  // Social media icon components
  const socialIcons = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: socialLinks.facebook,
      label: 'Puspita\'s Artistry',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: socialLinks.instagram,
      label: '@puspita_60.60',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    {
      name: 'World Archery',
      icon: <Target className="h-5 w-5" />,
      url: socialLinks.worldArchery,
      label: 'Official Profile',
      color: 'hover:text-primary'
    },
  ];

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--card)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
          },
        }}
      />
      
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Archery target rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
                Connect With Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                Let's Create{' '}
                <span className="text-gradient">Together</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Whether you're interested in a custom art piece, want to collaborate, 
                or just want to say hello — I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div 
                  className="flex items-start gap-4 cursor-pointer group"
                  onClick={openEmailClient}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm break-all">
                      {emailAddress}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Click to send an email
                    </p>
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
                      {location}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Available for collaborations worldwide
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">Follow my journey</p>
                  <div className="space-y-4">
                    {socialIcons.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-card border border-border group-hover:border-primary flex items-center justify-center transition-all ${social.color}`}>
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {social.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {social.label}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* World Archery Profile Highlight */}
                <div className="p-5 bg-gradient-to-br from-primary/10 to-transparent rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">
                      World Archery Profile
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    View my official statistics, rankings, and competition history
                  </p>
                  <a 
                    href={socialLinks.worldArchery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Profile <span>→</span>
                  </a>
                </div>

                {/* Response Time Info */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-foreground font-medium mb-1 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    Response Time
                  </p>
                  <p className="text-xs text-muted-foreground">
                    I typically respond within 24-48 hours. For art commissions or archery collaborations, 
                    please mention the details in your message.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="How should I address you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project, commission idea, or just say hello..."
                    required
                  />
                </div>
                
                {/* Quick interest buttons */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">I'm interested in:</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, message: prev.message + (prev.message ? ' ' : '') + '#ArtCommission' }))}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    🎨 Art Commission
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, message: prev.message + (prev.message ? ' ' : '') + '#Collaboration' }))}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    🤝 Collaboration
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, message: prev.message + (prev.message ? ' ' : '') + '#ArcheryEvent' }))}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    🏹 Archery Event
                  </button>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  I'll get back to you within 24-48 hours. All inquiries are confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;