import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'green' | 'cyan' | 'purple' | 'red';
  hover?: boolean;
}

const glowColors = {
  green: 'hover:shadow-[0_0_30px_hsl(160,100%,50%,0.3)] border-primary/30 hover:border-primary/60',
  cyan: 'hover:shadow-[0_0_30px_hsl(180,100%,50%,0.3)] border-accent/30 hover:border-accent/60',
  purple: 'hover:shadow-[0_0_30px_hsl(280,100%,60%,0.3)] border-secondary/30 hover:border-secondary/60',
  red: 'hover:shadow-[0_0_30px_hsl(0,100%,50%,0.3)] border-destructive/30 hover:border-destructive/60',
};

const GlowCard = ({ children, className, glowColor = 'green', hover = true }: GlowCardProps) => {
  return (
    <div
      className={cn(
        'relative bg-card/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-500',
        hover && glowColors[glowColor],
        hover && 'hover:bg-card/80 hover:-translate-y-1',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
