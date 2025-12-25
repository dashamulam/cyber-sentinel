import { 
  Shield, 
  Globe, 
  Smartphone, 
  Server, 
  Code, 
  Terminal,
  AlertTriangle,
  Lock
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';

const skillCategories = [
  {
    title: 'Offensive Security',
    icon: Shield,
    color: 'green' as const,
    skills: [
      'Web Application Pentesting',
      'API Security Testing',
      'Mobile App Security',
      'Network Penetration Testing',
      'Social Engineering',
      'Red Team Operations',
    ],
  },
  {
    title: 'Vulnerabilities',
    icon: AlertTriangle,
    color: 'red' as const,
    skills: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'IDOR & Access Control',
      'SSRF & SSTI',
      'Remote Code Execution',
      'Authentication Bypass',
    ],
  },
  {
    title: 'Tools & Frameworks',
    icon: Terminal,
    color: 'cyan' as const,
    skills: [
      'Burp Suite Pro',
      'Metasploit Framework',
      'Nmap & Masscan',
      'OWASP ZAP',
      'Nuclei & ffuf',
      'Wireshark',
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'purple' as const,
    skills: [
      'Python',
      'Bash/Shell',
      'JavaScript',
      'Go',
      'PowerShell',
      'SQL',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// TECHNICAL SKILLS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Arsenal & Expertise
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for identifying, exploiting, and remediating security vulnerabilities
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={200 + categoryIndex * 100}>
              <GlowCard glowColor={category.color} className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color === 'green' ? 'primary' : category.color === 'cyan' ? 'accent' : category.color === 'purple' ? 'secondary' : 'destructive'}/10`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === 'green' ? 'text-primary' :
                      category.color === 'cyan' ? 'text-accent' :
                      category.color === 'purple' ? 'text-secondary' :
                      'text-destructive'
                    }`} />
                  </div>
                  <h3 className="text-xl font-mono font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'green' ? 'bg-primary' :
                        category.color === 'cyan' ? 'bg-accent' :
                        category.color === 'purple' ? 'bg-secondary' :
                        'bg-destructive'
                      } group-hover:animate-pulse-glow`} />
                      <span className="font-mono text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Tools marquee */}
        <ScrollReveal delay={600}>
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-8 animate-[slide-in-left_20s_linear_infinite]">
              {['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Nuclei', 'ffuf', 'SQLMap', 'Gobuster', 'Hydra', 'John', 'Hashcat', 'Aircrack-ng'].map((tool) => (
                <div
                  key={tool}
                  className="flex-shrink-0 px-6 py-3 bg-card/50 border border-primary/20 rounded-lg font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors whitespace-nowrap"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
