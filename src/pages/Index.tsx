import { Helmet } from 'react-helmet-async';
import MatrixBackground from '@/components/MatrixBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alex Hunter | Cybersecurity Researcher & Penetration Tester</title>
        <meta 
          name="description" 
          content="Certified Penetration Tester & Cybersecurity Researcher specializing in web application security, API testing, and vulnerability research. OSCP, OSCE certified." 
        />
        <meta name="keywords" content="penetration testing, cybersecurity, ethical hacking, bug bounty, OSCP, security researcher" />
        <meta property="og:title" content="Alex Hunter | Cybersecurity Researcher" />
        <meta property="og:description" content="Professional penetration testing and security research services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://alexhunter.security" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden">
        <MatrixBackground />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <CertificationsSection />
          <ResearchSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
