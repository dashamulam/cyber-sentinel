import { 
  Globe, 
  Server, 
  Search, 
  Bug, 
  MessageSquare, 
  FileText,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';
import { Button } from '../ui/button';

const services = [
  {
    icon: Globe,
    title: 'Web Application Penetration Testing',
    description: 'Comprehensive security assessment of your web applications to identify vulnerabilities like XSS, SQLi, IDOR, and authentication flaws.',
    color: 'green' as const,
  },
  {
    icon: Server,
    title: 'API Security Testing',
    description: 'In-depth analysis of REST, GraphQL, and SOAP APIs to uncover security misconfigurations, broken authentication, and data exposure.',
    color: 'cyan' as const,
  },
  {
    icon: Search,
    title: 'Vulnerability Assessment',
    description: 'Systematic identification and classification of security weaknesses in your infrastructure, applications, and network.',
    color: 'purple' as const,
  },
  {
    icon: Bug,
    title: 'Bug Bounty & VDP Research',
    description: 'Continuous security research through responsible vulnerability disclosure to help protect your assets before attackers find them.',
    color: 'green' as const,
  },
  {
    icon: MessageSquare,
    title: 'Security Consulting',
    description: 'Strategic security guidance, threat modeling, and security architecture review to build robust defense mechanisms.',
    color: 'cyan' as const,
  },
  {
    icon: FileText,
    title: 'Report Writing & Disclosure',
    description: 'Detailed technical reports with clear remediation steps and responsible disclosure coordination with affected parties.',
    color: 'purple' as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// SERVICES'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              What I Offer
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Professional security services tailored to protect your digital assets
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={200 + index * 100}>
              <GlowCard glowColor={service.color} className="h-full group">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  service.color === 'green' ? 'bg-primary/10' :
                  service.color === 'cyan' ? 'bg-accent/10' :
                  'bg-secondary/10'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === 'green' ? 'text-primary' :
                    service.color === 'cyan' ? 'text-accent' :
                    'text-secondary'
                  }`} />
                </div>
                
                <h3 className="text-lg font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-12 text-center">
            <Button variant="cyber" size="lg" asChild>
              <a href="#contact">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
