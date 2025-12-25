import { Github, ExternalLink, Star, GitFork, Terminal } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GlowCard from '../GlowCard';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'VulnScanner',
    description: 'Automated vulnerability scanner for web applications with support for custom nuclei templates and parallel scanning.',
    tech: ['Python', 'Docker', 'Nuclei'],
    stars: 234,
    forks: 45,
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: 'APIFuzzer',
    description: 'Intelligent API fuzzing tool that automatically generates test cases based on OpenAPI specifications.',
    tech: ['Go', 'REST', 'GraphQL'],
    stars: 189,
    forks: 32,
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: 'SubdomainHunter',
    description: 'Fast subdomain enumeration tool combining multiple sources with live validation and screenshot capture.',
    tech: ['Rust', 'Async', 'DNS'],
    stars: 156,
    forks: 28,
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'AuthBypass Toolkit',
    description: 'Collection of scripts and payloads for testing authentication mechanisms and session management.',
    tech: ['Python', 'Burp', 'JWT'],
    stars: 312,
    forks: 67,
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: 'Home Lab Setup',
    description: 'Complete infrastructure-as-code setup for a penetration testing home lab with vulnerable machines.',
    tech: ['Terraform', 'Ansible', 'VMware'],
    stars: 89,
    forks: 21,
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'ReconAutomator',
    description: 'Automated reconnaissance pipeline for bug bounty hunting with integrated notification system.',
    tech: ['Bash', 'Python', 'AWS'],
    stars: 445,
    forks: 98,
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// PROJECTS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Open Source & Tools
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Security tools and automation scripts to enhance offensive security operations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={200 + index * 100}>
              <GlowCard className="h-full group" glowColor={project.featured ? 'green' : 'cyan'}>
                {project.featured && (
                  <div className="absolute -top-3 -right-3">
                    <span className="px-2 py-1 text-xs font-mono bg-primary text-primary-foreground rounded animate-pulse-glow">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <Button variant="cyber" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
