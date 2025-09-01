// File: src/components/home/WhyChooseUs.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { getCombinedStats } from '@/data/agents';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Award,
  Clock,
  Handshake,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const iconMap: Record<string, typeof Trophy> = {
  'Trophy': Trophy,
  'Handshake': Handshake,
  'TrendingUp': TrendingUp,
  'Sparkles': Sparkles,
};

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stats = getCombinedStats();
  const [selectedFeature, setSelectedFeature] = useState(0);

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

  // Stats counter animation
  const [counters, setCounters] = useState({
    properties: 0,
    satisfaction: 0,
    days: 0,
    years: 0
  });

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        properties: Math.min(prev.properties + Math.ceil(stats.totalProperties / steps), stats.totalProperties),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(stats.avgSatisfaction / steps), stats.avgSatisfaction),
        days: Math.min(prev.days + Math.ceil(stats.avgDaysToSell / steps), stats.avgDaysToSell),
        years: Math.min(prev.years + Math.ceil(stats.totalYearsExperience / steps), stats.totalYearsExperience)
      }));
    }, interval);

    setTimeout(() => {
      clearInterval(timer);
      setCounters({
        properties: stats.totalProperties,
        satisfaction: stats.avgSatisfaction,
        days: stats.avgDaysToSell,
        years: stats.totalYearsExperience
      });
    }, duration);

    return () => clearInterval(timer);
  }, [isVisible, stats]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge 
            variant="outline" 
            className={cn(
              "mb-6 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            הבחירה הנכונה
          </Badge>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="text-white">למה לבחור ב</span>
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              שפס נדל״ן?
            </span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            הניסיון, המקצועיות והתוצאות מדברים בעד עצמם
          </p>
        </div>

        {/* Stats Section - Mobile: 2x2 Grid, Desktop: 4 columns */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {/* Properties Sold */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 md:p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg mb-3">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
              {counters.properties}+
            </div>
            <div className="text-sm text-gray-400">נכסים נמכרו</div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 md:p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg mb-3">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
              {counters.satisfaction}%
            </div>
            <div className="text-sm text-gray-400">לקוחות מרוצים</div>
          </div>

          {/* Days to Sell */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 md:p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg mb-3">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
              {counters.days}
            </div>
            <div className="text-sm text-gray-400">ימים למכירה</div>
          </div>

          {/* Years Experience */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 md:p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
              {counters.years}+
            </div>
            <div className="text-sm text-gray-400">שנות ניסיון</div>
          </div>
        </div>

        {/* Features Section - Mobile: Accordion, Desktop: Grid with hover */}
        <div className="md:hidden space-y-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            const isActive = selectedFeature === index;
            
            return (
              <div
                key={index}
                className={cn(
                  "bg-[#1a1a1a] border rounded-xl transition-all duration-300",
                  isActive ? "border-[#D4AF37]" : "border-[#D4AF37]/20"
                )}
              >
                <button
                  onClick={() => setSelectedFeature(isActive ? -1 : index)}
                  className="w-full p-4 flex items-center gap-4"
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all",
                    isActive 
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#B8860B]" 
                      : "bg-[#D4AF37]/10"
                  )}>
                    <Icon className={cn(
                      "w-6 h-6",
                      isActive ? "text-black" : "text-[#D4AF37]"
                    )} />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className={cn(
                      "font-bold transition-colors",
                      isActive ? "text-[#FFD700]" : "text-white"
                    )}>
                      {item.title}
                    </h3>
                  </div>
                  <Sparkles className={cn(
                    "w-5 h-5 transition-all",
                    isActive ? "text-[#D4AF37] rotate-180" : "text-gray-500"
                  )} />
                </button>
                <div className={cn(
                  "px-4 overflow-hidden transition-all duration-300",
                  isActive ? "max-h-32 pb-4" : "max-h-0"
                )}>
                  <p className="text-gray-400 pr-16">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            
            return (
              <div
                key={index}
                className={cn(
                  "group relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6",
                  "hover:border-[#D4AF37]/40 hover:shadow-lg hover:-translate-y-1",
                  "transition-all duration-300",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
                }}
              >
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-[#D4AF37]">0{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/10 rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;