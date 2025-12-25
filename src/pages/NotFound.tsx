import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Shield, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-pulse-glow">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-mono font-bold cyber-text-gradient mb-4">
          404
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-2">
          Access Denied
        </p>
        
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for has been moved, deleted, or never existed. 
          Perhaps you need higher clearance?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cyber" size="lg" asChild>
            <a href="/">
              <Home className="w-5 h-5" />
              Return to Base
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
