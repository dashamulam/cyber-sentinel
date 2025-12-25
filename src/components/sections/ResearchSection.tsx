import { useState } from 'react';
import { FileText, Bug, Flag, BookOpen, ExternalLink, Calendar } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';
import { Button } from '../ui/button';

const categories = ['All', 'Writeups', 'Bug Bounty', 'CTF', 'Blog'];

const research = [
  {
    category: 'Writeups',
    title: 'Critical SSRF Leading to AWS Metadata Exposure',
    description: 'Discovered a server-side request forgery vulnerability that allowed access to internal AWS metadata, potentially exposing sensitive credentials.',
    date: '2024-01-15',
    severity: 'Critical',
    tags: ['SSRF', 'AWS', 'Cloud Security'],
  },
  {
    category: 'Bug Bounty',
    title: 'Authentication Bypass in Major SaaS Platform',
    description: 'Identified a flaw in the OAuth implementation that allowed unauthorized access to user accounts through token manipulation.',
    date: '2023-11-20',
    severity: 'High',
    tags: ['OAuth', 'Authentication', 'Token'],
  },
  {
    category: 'CTF',
    title: 'HackTheBox: Blackfield - Full Walkthrough',
    description: 'Complete writeup of the Blackfield machine covering Windows Active Directory exploitation and privilege escalation techniques.',
    date: '2023-10-05',
    severity: 'Medium',
    tags: ['HTB', 'Active Directory', 'Windows'],
  },
  {
    category: 'Blog',
    title: 'Modern API Security: Common Pitfalls',
    description: 'A comprehensive guide on securing REST and GraphQL APIs, covering authentication, rate limiting, and input validation.',
    date: '2023-09-18',
    severity: null,
    tags: ['API', 'REST', 'GraphQL'],
  },
  {
    category: 'Writeups',
    title: 'SQL Injection in E-commerce Platform',
    description: 'Time-based blind SQL injection vulnerability discovered in the search functionality, allowing data exfiltration.',
    date: '2023-08-22',
    severity: 'Critical',
    tags: ['SQLi', 'Database', 'E-commerce'],
  },
  {
    category: 'Bug Bounty',
    title: 'Stored XSS in Customer Support Portal',
    description: 'Persistent cross-site scripting vulnerability that could execute malicious scripts in the context of support agents.',
    date: '2023-07-10',
    severity: 'High',
    tags: ['XSS', 'Stored', 'Customer Portal'],
  },
];

const severityColors = {
  Critical: 'bg-destructive/20 text-destructive border-destructive/30',
  High: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-primary/20 text-primary border-primary/30',
};

const categoryIcons = {
  Writeups: FileText,
  'Bug Bounty': Bug,
  CTF: Flag,
  Blog: BookOpen,
};

const ResearchSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResearch = activeCategory === 'All' 
    ? research 
    : research.filter(item => item.category === activeCategory);

  return (
    <section id="research" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// RESEARCH & WRITEUPS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Security Research
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Documented findings, vulnerability disclosures, and technical deep-dives
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)]'
                    : 'bg-card/50 text-muted-foreground border border-primary/20 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResearch.map((item, index) => {
            const IconComponent = categoryIcons[item.category as keyof typeof categoryIcons] || FileText;
            
            return (
              <ScrollReveal key={item.title} delay={300 + index * 100}>
                <GlowCard className="h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.category}
                      </span>
                    </div>
                    {item.severity && (
                      <span className={`px-2 py-0.5 text-xs font-mono rounded border ${
                        severityColors[item.severity as keyof typeof severityColors]
                      }`}>
                        {item.severity}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-mono font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary/80 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Research
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchSection;
