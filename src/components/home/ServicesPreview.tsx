// File: src/components/home/ServicesPreview.tsx

'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getServicesPreview } from '@/data/services';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Check,
  ChevronRight,
  FileText,
  Home,
  Key,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const iconMap: Record<string, typeof Home> = {
  '🏠': Home,
  '🔑': Key,
  '🏗️': Home,
  '🏡': Home,
  '📋': FileText,
  '📊': TrendingUp,
};

const ServicesPreview = () => {
  const services = getServicesPreview();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
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

  // Service features for each service
  const serviceFeatures = [
    ['הערכת שווי חינם', 'צילום מקצועי', 'שיווק דיגיטלי'],
    ['מאגר נכסים אקסקלוסיבי', 'ליווי משכנתאות', 'בדיקות מקיפות'],
    ['שיווק מקיף ליזמים', 'קמפיינים דיגיטליים', 'ליווי עד אכלוס'],
    ['חשיפה מקסימלית', 'שיווק ממוקד', 'מכירה מהירה'],
    ['סינון שוכרים', 'חוזים מקצועיים', 'ניהול נכס'],
    ['ניתוח שוק מעמיק', 'ייעוץ השקעות', 'דוחות מפורטים']
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background-secondary to-background"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Sparkles className="w-4 h-4 text-primary-500" />
            <Badge variant="outline" className="border-primary-500 text-primary-500 bg-primary-500/10">
              השירותים שלנו
            </Badge>
            <Sparkles className="w-4 h-4 text-primary-500" />
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              פתרונות נדל&quot;ן
            </span>
            <span className="text-white"> מקיפים</span>
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            ליווי אישי ומקצועי בכל שלב של העסקה
          </p>
        </div>

        {/* Mobile: Card Stack View */}
        <div className="md:hidden">
          {/* Active Service Display */}
          <div className="mb-8">
            <div className="relative bg-background-card rounded-2xl border border-primary-500/30 p-6 shadow-lg">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Home;
                return (
                  <div
                    key={index}
                    className={cn(
                      "transition-opacity duration-300",
                      activeIndex === index ? "block" : "hidden"
                    )}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Quick Features */}
                    <div className="space-y-2 mb-6">
                      {serviceFeatures[index] && serviceFeatures[index].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary-500" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={service.link}>
                      <Button 
                        size="md" 
                        variant="primary"
                        icon={ArrowLeft}
                        fullWidth
                      >
                        למידע נוסף
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Service Selector Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "p-4 rounded-lg border transition-all duration-300 text-left",
                    activeIndex === index 
                      ? "bg-primary-500/10 border-primary-500 shadow-md" 
                      : "bg-background-card border-primary-500/20 hover:border-primary-500/40"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn(
                      "w-5 h-5",
                      activeIndex === index ? "text-primary-500" : "text-gray-400"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeIndex === index ? "text-primary-500" : "text-gray-300"
                    )}>
                      {service.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: Bento Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            
            return (
              <Link 
                key={index} 
                href={service.link}
                className={cn(
                  "group",
                  // Make first and last cards span 2 columns for variety
                  index === 0 && "lg:col-span-2",
                  index === 3 && "lg:col-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative h-full p-6 rounded-xl",
                    "bg-background-card border border-primary-500/20",
                    "transition-all duration-300",
                    "hover:border-primary-500/40 hover:shadow-lg hover:-translate-y-1",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {/* Content */}
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={cn(
                        "inline-flex items-center justify-center transition-all duration-300",
                        "w-12 h-12 bg-primary-500/10 rounded-lg",
                        "group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-600"
                      )}>
                        <Icon className="w-6 h-6 text-primary-500 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-4 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Show features on wider cards */}
                    {(index === 0 || index === 3) && (
                      <div className="space-y-1 mb-4">
                        {serviceFeatures[index] && serviceFeatures[index].slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-3 h-3 text-primary-500" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* CTA */}
                    <div className="flex items-center text-primary-500 font-medium group-hover:text-primary-400 transition-colors">
                      <span className="text-sm">למידע נוסף</span>
                      <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className={cn(
          "text-center mt-12 md:mt-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: '400ms' }}>
          <Link href="/services">
            <Button 
              size="lg" 
              variant="primary"
              icon={ArrowLeft}
            >
              גלה את כל השירותים שלנו
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;