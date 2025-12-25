import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              © {currentYear} Alex Hunter. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            <span>for the security community</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              Disclosure Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
