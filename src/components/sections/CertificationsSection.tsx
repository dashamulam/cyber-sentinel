import { Award, ExternalLink } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const certifications = [
  {
    name: 'OSCP',
    fullName: 'Offensive Security Certified Professional',
    issuer: 'Offensive Security',
    year: '2020',
    verified: true,
  },
  {
    name: 'OSCE',
    fullName: 'Offensive Security Certified Expert',
    issuer: 'Offensive Security',
    year: '2021',
    verified: true,
  },
  {
    name: 'CRTP',
    fullName: 'Certified Red Team Professional',
    issuer: 'Pentester Academy',
    year: '2021',
    verified: true,
  },
  {
    name: 'CEH',
    fullName: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    year: '2019',
    verified: true,
  },
  {
    name: 'eWPTX',
    fullName: 'eLearnSecurity Web Application Penetration Tester eXtreme',
    issuer: 'eLearnSecurity',
    year: '2022',
    verified: true,
  },
  {
    name: 'PNPT',
    fullName: 'Practical Network Penetration Tester',
    issuer: 'TCM Security',
    year: '2023',
    verified: true,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:60px_60px] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
              {'// CERTIFICATIONS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold cyber-text-gradient">
              Credentials & Recognition
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in offensive security
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={200 + index * 100}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  {/* Badge icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:animate-pulse-glow">
                        <span className="text-xl font-mono font-bold text-primary">
                          {cert.name}
                        </span>
                      </div>
                      {cert.verified && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-mono font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.fullName}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
