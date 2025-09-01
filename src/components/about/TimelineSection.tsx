// File: src/components/about/TimelineSection.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MapPin,
  Sparkles,
  TrendingUp,
  Trophy,
  Users
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const timelineEvents = [
  {
    year: '2006',
    title: 'ההתחלה',
    description: 'גלית מתחילה את דרכה בתחום הנדל"ן בחיפה',
    agent: 'גלית',
    icon: Calendar,
    highlight: 'התחלת המסע',
    color: 'from-[#D4AF37] to-[#B8860B]'
  },
  {
    year: '2009',
    title: 'הצטרפות לצוות',
    description: 'חיים מצטרף לתחום ומתמחה בנכסים מסחריים',
    agent: 'חיים',
    icon: Users,
    highlight: 'הרחבת הצוות',
    color: 'from-[#B8860B] to-[#D4AF37]'
  },
  {
    year: '2015',
    title: 'הקמת שפס נדל"ן',
    description: 'פתיחת המשרד המשותף והתחלת שיתוף הפעולה המלא',
    agent: 'גלית וחיים',
    icon: MapPin,
    highlight: 'אבן דרך',
    color: 'from-[#FFD700] to-[#D4AF37]'
  },
  {
    year: '2020',
    title: 'הרחבת השירותים',
    description: 'הוספת שירותי ניהול נכסים והערכות שווי מקצועיות',
    agent: 'גלית וחיים',
    icon: TrendingUp,
    highlight: 'צמיחה',
    color: 'from-[#D4AF37] to-[#FFD700]'
  },
  {
    year: '2024',
    title: 'מובילים בחיפה',
    description: 'מעל 150 נכסים נמכרו, 98% שביעות רצון',
    agent: 'גלית וחיים',
    icon: Trophy,
    highlight: 'הישג',
    color: 'from-[#B8860B] via-[#D4AF37] to-[#FFD700]'
  }
];

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(timelineEvents.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  // Main section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger staggered animations for items
          timelineEvents.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
    >
      {/* Background accent */}
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
            <Sparkles className="w-3 h-3 ml-1" />
            המסע שלנו
          </Badge>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              הסיפור שלנו
            </span>
            <span className="text-white"> לאורך השנים</span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            מסע של מקצועיות, אמינות והצלחה
          </p>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B8860B] via-[#D4AF37] to-[#B8860B]" />
            
            {/* Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "relative flex gap-4 transition-all duration-700",
                      visibleItems[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
                        activeIndex === index 
                          ? `bg-gradient-to-br ${event.color} shadow-gold-glow` 
                          : "bg-[#1a1a1a] border-2 border-[#D4AF37]/50"
                      )}>
                        <Icon className={cn(
                          "w-6 h-6",
                          activeIndex === index ? "text-black" : "text-[#D4AF37]"
                        )} />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className="flex-1"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                      <Card 
                        variant="default" 
                        className={cn(
                          "bg-[#1a1a1a] border transition-all duration-300 cursor-pointer",
                          activeIndex === index 
                            ? "border-[#D4AF37] shadow-gold" 
                            : "border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                        )}
                      >
                        <CardContent className="p-4">
                          {/* Year & Highlight */}
                          <div className="flex items-center gap-2 mb-2">
                            <Badge 
                              variant="outline" 
                              size="sm"
                              className={cn(
                                "transition-all duration-300",
                                activeIndex === index 
                                  ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#FFD700]" 
                                  : "border-[#D4AF37]/30 text-[#D4AF37]"
                              )}
                            >
                              {event.year}
                            </Badge>
                          </div>
                          
                          {/* Title */}
                          <h3 className={cn(
                            "text-lg font-bold mb-2 transition-colors",
                            activeIndex === index ? "text-[#FFD700]" : "text-white"
                          )}>
                            {event.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-sm text-gray-400 mb-3">
                            {event.description}
                          </p>
                          
                          {/* Agent */}
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant="outline" 
                              size="sm"
                              className="bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]"
                            >
                              {event.agent}
                            </Badge>
                            {activeIndex === index && (
                              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Alternating Timeline */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B8860B] via-[#D4AF37] to-[#B8860B]" />
            
            {/* Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "relative flex items-center",
                      isLeft ? "justify-start" : "justify-end"
                    )}
                  >
                    {/* Content */}
                    <div className={cn(
                      "w-5/12 transition-all duration-700",
                      visibleItems[index] 
                        ? `opacity-100 ${isLeft ? 'translate-x-0' : '-translate-x-0'}` 
                        : `opacity-0 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`
                    )}>
                      <Card 
                        variant="default" 
                        hover
                        className="group bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:shadow-gold"
                      >
                        <CardContent className="p-6">
                          {/* Year Badge with gradient */}
                          <div className="flex items-center gap-3 mb-4">
                            <Badge 
                              variant="primary" 
                              size="lg"
                              className={`bg-gradient-to-r ${event.color} text-black font-bold`}
                            >
                              {event.year}
                            </Badge>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors mb-3">
                            {event.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-400 mb-4">
                            {event.description}
                          </p>
                          
                          {/* Agent & Arrow */}
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant="outline" 
                              size="sm"
                              className="bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]"
                            >
                              {event.agent}
                            </Badge>
                            <ArrowRight className={cn(
                              "w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all",
                              isLeft ? "" : "rotate-180"
                            )} />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Center Icon */}
                    <div className={cn(
                      "absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700",
                      visibleItems[index] ? "scale-100 rotate-0" : "scale-0 rotate-180"
                    )}>
                      <div className="w-14 h-14 bg-black border-2 border-[#D4AF37] rounded-full shadow-gold flex items-center justify-center group hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] hover:shadow-gold-glow transition-all cursor-pointer">
                        <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TimelineSection;