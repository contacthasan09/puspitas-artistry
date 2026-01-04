import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Facebook, Dribbble } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email contact info
  const emailAddress = 'contacthasan09@gmail.com';
  const location = 'Mirpur DOHS, Dhaka';

  // Social links with your actual URLs
  const socialLinks = {
    github: 'https://github.com/contacthasan09',
    linkedin: 'https://www.linkedin.com/in/gulam-hasan-a4a55938a/',
    twitter: 'https://twitter.com/yourusername', // Update with your Twitter URL
    facebook: 'https://facebook.com/mahdi.hasan.388315', // Update with your Facebook URL
    dribbble: 'https://dribbble.com/yourusername', // Update with your Dribbble URL
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
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
          _subject: `New Message from ${formData.name} - Portfolio Contact`,
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
    const subject = 'Portfolio Inquiry - Potential Collaboration';
    const body = `Hello,\n\nI came across your portfolio and would like to discuss...\n\nBest regards,\n[Your Name]`;
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  // Social media icon components
  const socialIcons = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: socialLinks.github,
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: socialLinks.linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: socialLinks.twitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: socialLinks.facebook,
      color: 'hover:text-blue-700 dark:hover:text-blue-500'
    },
    {
      name: 'Dribbble',
      icon: <Dribbble className="h-5 w-5" />,
      url: socialLinks.dribbble,
      color: 'hover:text-pink-500 dark:hover:text-pink-400'
    }
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
                Have a Flutter project in mind? I'd love to hear about it. Whether it's 
                a mobile app, web application, or fullstack solution, let's discuss how 
                we can bring your vision to life.
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
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {emailAddress}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Click to compose email
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
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">Connect with me</p>
                  <div className="flex flex-wrap gap-3">
                    {socialIcons.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all ${social.color}`}
                        title={social.name}
                        aria-label={`Visit my ${social.name} profile`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time Info */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-foreground font-medium mb-1">
                    Response Time
                  </p>
                  <p className="text-xs text-muted-foreground">
                    I typically respond within 24 hours. For urgent inquiries, 
                    please mention "URGENT" in your subject line.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
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
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                  />
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
                  I'll get back to you within 24 hours. All inquiries are confidential.
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