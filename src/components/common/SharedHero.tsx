// File: src/components/common/SharedHero.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { BadgeIcon, LucideIcon, Sparkles } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

export interface SharedHeroProps {
  // Required
  badge: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  
  // Optional customization
  badgeIcon?: LucideIcon;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
  
  // Content sections
  features?: Array<{
    icon: LucideIcon;
    text: string;
  }>;
  stats?: Array<{
    icon: LucideIcon;
    value: number | string;
    suffix?: string;
    label: string;
    color?: string;
  }>;
  actions?: ReactNode;
  children?: ReactNode;
  
  // Styling
  className?: string;
  contentClassName?: string;
}

const SharedHero = ({
  badge,
  title,
  subtitle,
  badgeIcon,
  centered = true,
  size = 'md',
  features,
  stats,
  actions,
  children,
  className,
  contentClassName
}: SharedHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Size classes
  const sizeClasses = {
    sm: {
      section: 'min-h-[500px] md:min-h-[600px]',
      title: 'text-3xl md:text-4xl lg:text-5xl',
      subtitle: 'text-base md:text-lg',
      container: 'max-w-4xl'
    },
    md: {
      section: 'min-h-[550px] md:min-h-[650px]',
      title: 'text-4xl md:text-5xl lg:text-6xl',
      subtitle: 'text-lg md:text-xl',
      container: 'max-w-5xl'
    },
    lg: {
      section: 'min-h-[600px] md:min-h-[700px]',
      title: 'text-5xl md:text-6xl lg:text-7xl',
      subtitle: 'text-xl md:text-2xl',
      container: 'max-w-6xl'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "relative bg-gradient-to-b from-background-secondary via-background-tertiary to-background-secondary overflow-hidden flex flex-col justify-center",
        currentSize.section,
        className
      )}
    >
      {/* Animated background with multiple floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central animated glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]">
          <div 
            className="absolute inset-0 bg-gradient-radial from-primary-500/15 via-primary-400/8 to-transparent blur-3xl"
            style={{
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Moving orb 1 - left side */}
        <div 
          className="absolute top-1/3 left-0 w-80 h-80"
          style={{
            animation: 'moveOrb1 15s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary-500/12 to-transparent blur-3xl" />
        </div>
        
        {/* Moving orb 2 - right side */}
        <div 
          className="absolute top-1/2 right-0 w-96 h-96"
          style={{
            animation: 'moveOrb2 20s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary-400/10 to-transparent blur-3xl" />
        </div>
        
        {/* Moving orb 3 - bottom */}
        <div 
          className="absolute bottom-0 left-1/3 w-72 h-72"
          style={{
            animation: 'moveOrb3 18s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary-600/12 to-transparent blur-3xl" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animation: `floatParticle ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle mesh gradient */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #c1a767 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, #d5c385 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, #a88d54 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="container relative z-10 py-12">
        <div className={cn(
          "mx-auto",
          currentSize.container,
          contentClassName
        )}>
          {/* Header */}
          <div className={cn(
            "mb-12 md:mb-16",
            centered && "text-center"
          )}>
            {/* Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Sparkles className="w-4 h-4 text-primary-500 animate-pulse" />
              <Badge 
                variant="outline" 
                size="lg" 
                className="border-primary-500/60 text-primary-500 bg-gradient-to-r from-primary-500/15 to-primary-400/10 backdrop-blur-md"
              >
                {badgeIcon && <BadgeIcon className="w-3 h-3 ml-1" />}
                {badge}
              </Badge>
              <Sparkles className="w-4 h-4 text-primary-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Title */}
            <h1 className={cn(
              "font-bold mb-6 transition-all duration-700 delay-100",
              currentSize.title,
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              {typeof title === 'string' ? (
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    {title}
                  </span>
                </span>
              ) : (
                title
              )}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className={cn(
                "text-gray-300 leading-relaxed transition-all duration-700 delay-200",
                currentSize.subtitle,
                centered && "max-w-3xl mx-auto",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                {subtitle}
              </p>
            )}

            {/* Features - Mobile (Compact Pills) */}
            {features && features.length > 0 && (
              <div className={cn(
                "md:hidden flex flex-wrap justify-center gap-2 mt-6 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-background-card/80 to-background-elevated/80 rounded-full border border-primary-500/20 backdrop-blur-md"
                  >
                    <feature.icon className="w-3 h-3 text-primary-500" />
                    <span className="text-xs text-gray-400">{feature.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Features - Desktop */}
            {features && features.length > 0 && (
              <div className={cn(
                "hidden md:flex gap-6 mt-8 transition-all duration-700 delay-300",
                centered && "justify-center",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <feature.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-400">{feature.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            {actions && (
              <div className={cn(
                "mt-10 transition-all duration-700 delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                {actions}
              </div>
            )}
          </div>

          {/* Custom children content */}
          {children && (
            <div className={cn(
              "mt-12 transition-all duration-700 delay-600",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={cn(
        "absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        <button 
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center gap-1 group cursor-pointer p-2"
          aria-label="Scroll down"
        >
          <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-primary-500/30 to-primary-500/50" />
          <svg 
            className="w-4 h-4 text-primary-500/50 group-hover:text-primary-500 transition-colors animate-bounce-slow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.1);
          }
        }
        
        @keyframes moveOrb1 {
          0%, 100% { 
            transform: translate(0, 0);
          }
          25% { 
            transform: translate(50px, -30px);
          }
          50% { 
            transform: translate(100px, 20px);
          }
          75% { 
            transform: translate(30px, 40px);
          }
        }
        
        @keyframes moveOrb2 {
          0%, 100% { 
            transform: translate(0, 0);
          }
          33% { 
            transform: translate(-60px, -40px);
          }
          66% { 
            transform: translate(-80px, 30px);
          }
        }
        
        @keyframes moveOrb3 {
          0%, 100% { 
            transform: translate(0, 0);
          }
          25% { 
            transform: translate(40px, -50px);
          }
          50% { 
            transform: translate(-30px, -70px);
          }
          75% { 
            transform: translate(60px, -30px);
          }
        }
        
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-100px) translateX(20px);
            opacity: 0.8;
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  );
};

export default SharedHero;