import { ChevronDown, Download, Briefcase, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import TypeWriter from '../TypeWriter';

const HeroSection = () => {
  const roles = [
    'Cybersecurity Researcher',
    'Penetration Tester',
    'Certified Ethical Hacker',
    'Bug Bounty Hunter',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Terminal-style header */}
        <div className="inline-block mb-8 px-4 py-2 bg-card/50 backdrop-blur border border-primary/30 rounded-md font-mono text-sm text-primary">
          <span className="text-muted-foreground">root@kali</span>
          <span className="text-foreground">:</span>
          <span className="text-accent">~</span>
          <span className="text-foreground">$ </span>
          <span className="text-primary">./init_portfolio.sh</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6">
          <span className="block text-foreground mb-2">Hello, I'm</span>
          <span className="cyber-text-gradient text-glow">Alex Hunter</span>
        </h1>

        {/* Typing animation */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
            {'> '}
          </span>
          <TypeWriter
            words={roles}
            className="text-xl md:text-2xl lg:text-3xl font-mono text-primary"
          />
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          Securing the digital frontier through ethical hacking, vulnerability research, 
          and responsible disclosure. Let's make your applications bulletproof.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cyber" size="lg" asChild>
            <a href="#projects">
              <Eye className="w-5 h-5" />
              View Portfolio
            </a>
          </Button>
          <Button variant="cyberPurple" size="lg" asChild>
            <a href="#contact">
              <Briefcase className="w-5 h-5" />
              Hire Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
