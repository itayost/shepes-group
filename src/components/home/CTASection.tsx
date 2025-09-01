// File: src/components/home/CTASection.tsx

'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getCombinedStats } from '@/data/agents';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stats = getCombinedStats();

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

  // Trust indicators
  const trustIndicators = [
    { icon: Clock, text: 'זמינים 24/7' },
    { icon: Users, text: `${stats.totalProperties}+ לקוחות מרוצים` },
    { icon: Star, text: `${stats.avgSatisfaction}% שביעות רצון` }
  ];

  // Contact methods
  const contactMethods = [
    {
      id: 'phone',
      icon: Phone,
      title: 'התקשרו עכשיו',
      subtitle: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      color: 'primary',
      description: 'מענה מיידי'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'וואטסאפ',
      subtitle: 'שלחו הודעה',
      href: `https://wa.me/${SITE_CONFIG.whatsapp}?text=שלום, אני מעוניין/ת בשירותי נדל"ן`,
      color: 'success',
      description: 'נוח ומהיר',
      external: true
    },
    {
      id: 'form',
      icon: Mail,
      title: 'השאירו פרטים',
      subtitle: 'נחזור תוך 24 שעות',
      href: '/contact',
      color: 'secondary',
      description: 'ללא התחייבות'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
    >
      {/* Simple background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D4AF37]/5 to-[#B8860B]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with animation */}
          <div className={cn(
            "inline-flex items-center gap-2 mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <Badge 
              variant="outline" 
              size="lg" 
              className="border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10"
            >
              בואו נתחיל
            </Badge>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          {/* Title */}
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="text-white">מוכנים להתחיל את </span>
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              המסע לבית החדש
            </span>
            <span className="text-white"> שלכם?</span>
          </h2>
          
          {/* Subtitle */}
          <p className={cn(
            "text-lg md:text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            צוות המומחים שלנו כאן בשבילכם
            <br className="hidden md:block" />
            <span className="text-[#D4AF37] font-medium">ליווי מקצועי ואישי בכל שלב</span>
          </p>
          
          {/* Trust Indicators */}
          <div className={cn(
            "grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#D4AF37]/20"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-xs text-gray-400">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile: Stacked Contact Options */}
          <div className={cn(
            "md:hidden space-y-3 mb-8 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.external;
              const LinkWrapper = isExternal ? 'a' : Link;
              
              return (
                <LinkWrapper
                  key={method.id}
                  href={method.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block"
                >
                  <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 hover:border-[#D4AF37]/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">{method.title}</p>
                          <p className="text-sm text-gray-400">{method.description}</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>
                </LinkWrapper>
              );
            })}
          </div>

          {/* Desktop: Button Row */}
          <div className={cn(
            "hidden md:flex flex-wrap gap-4 justify-center mb-10 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {/* Phone Button */}
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              onMouseEnter={() => setHoveredButton('phone')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Button 
                size="lg" 
                variant="primary"
                icon={Phone}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">חייגו עכשיו: {SITE_CONFIG.phone}</span>
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] transition-opacity duration-300",
                  hoveredButton === 'phone' ? "opacity-100" : "opacity-0"
                )} />
              </Button>
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=שלום, אני מעוניין/ת בשירותי נדל"ן`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredButton('whatsapp')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Button 
                size="lg" 
                variant="outline"
                icon={MessageCircle}
                className="group"
              >
                שלחו וואטסאפ
                {hoveredButton === 'whatsapp' && (
                  <CheckCircle className="w-4 h-4 mr-2 animate-bounce" />
                )}
              </Button>
            </a>
            
            {/* Contact Form Button */}
            <Link 
              href="/contact"
              onMouseEnter={() => setHoveredButton('form')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Button 
                size="lg" 
                variant="secondary"
                icon={Mail}
              >
                השאירו פרטים
                {hoveredButton === 'form' && (
                  <span className="mr-2 text-xs opacity-75">נחזור תוך 24 שעות</span>
                )}
              </Button>
            </Link>
          </div>

          {/* Working Hours */}
          <div className={cn(
            "flex items-center justify-center gap-2 text-sm text-gray-400 transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>ראשון - חמישי: 9:00-20:00 | שישי: 9:00-14:00</span>
          </div>
          
          {/* Or divider for desktop */}
          <div className={cn(
            "hidden md:flex items-center gap-4 max-w-md mx-auto mt-8 transition-all duration-700 delay-600",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex-1 h-px bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
            <span className="text-gray-500 text-sm">או</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
          </div>
          
          {/* Secondary CTA */}
          <div className={cn(
            "hidden md:block mt-8 transition-all duration-700 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Link href="/services">
              <Button
                variant="ghost"
                icon={ArrowLeft}
                className="text-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10"
              >
                גלו את השירותים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;