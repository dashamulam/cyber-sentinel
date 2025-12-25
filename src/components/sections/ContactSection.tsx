import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, Shield, Key } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: 'I\'ll get back to you within 24-48 hours.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// CONTACT'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Let's Secure Your Application
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ready to identify vulnerabilities before attackers do? Get in touch for a security assessment
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left" delay={200}>
            <GlowCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono text-muted-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="pentest">Penetration Testing</option>
                    <option value="api">API Security Assessment</option>
                    <option value="vuln">Vulnerability Assessment</option>
                    <option value="consulting">Security Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Describe your security needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlowCard>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={300}>
            <div className="space-y-8">
              <GlowCard glowColor="cyan">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-mono font-bold text-foreground">
                    Secure Communication
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For sensitive communications, you can reach me through encrypted channels. 
                  All vulnerability disclosures are handled with strict confidentiality.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-primary">
                  <Key className="w-4 h-4" />
                  <span>PGP Key Available on Request</span>
                </div>
              </GlowCard>

              <GlowCard glowColor="purple">
                <h3 className="text-lg font-mono font-bold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-background/50 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </GlowCard>

              <div className="p-6 bg-card/30 border border-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary">{">"}</span> Response time: Usually within 24-48 hours
                  <br />
                  <span className="text-primary">{">"}</span> Available for: Remote & On-site assessments
                  <br />
                  <span className="text-primary">{">"}</span> Based in: United States (EST)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
