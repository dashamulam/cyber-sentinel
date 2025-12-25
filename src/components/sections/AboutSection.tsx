import { Terminal, Shield, Bug, Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';
import profileImage from '@/assets/profile-hacker.jpg';
const stats = [
  { icon: Bug, value: '150+', label: 'Bugs Reported' },
  { icon: Shield, value: '50+', label: 'Security Audits' },
  { icon: Award, value: '5+', label: 'CVEs Assigned' },
  { icon: Terminal, value: '8+', label: 'Years Experience' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// ABOUT ME'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Who Am I?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                <img
                  src={profileImage}
                  alt="Cybersecurity Professional"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-primary/20 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={300}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
                Certified Penetration Tester & 
                <span className="text-primary"> Security Researcher</span>
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 8 years of experience in offensive security, I specialize in 
                identifying and exploiting vulnerabilities before malicious actors do. 
                My expertise spans web application security, API testing, mobile security, 
                and network penetration testing.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I've helped Fortune 500 companies, startups, and government agencies 
                strengthen their security posture through comprehensive penetration 
                testing and vulnerability assessments. I'm also an active contributor 
                to bug bounty programs with recognition from major tech companies.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['OSCP', 'OSCE', 'CRTP', 'CEH', 'eWPTX'].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary border border-primary/30 rounded-md hover:bg-primary/20 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={400 + index * 100}>
              <GlowCard className="text-center" glowColor={index % 2 === 0 ? 'green' : 'cyan'}>
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
