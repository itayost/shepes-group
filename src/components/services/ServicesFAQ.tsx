// File: src/components/services/ServicesFAQ.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'בממוצע, הנכסים שלנו נמכרים תוך 21 ימים בלבד. הזמן תלוי במיקום, מחיר ומצב הנכס.'
  },
  {
    question: 'מה כולל השירות של ליווי בקנייה?',
    answer: 'ליווי מלא החל מחיפוש הנכס, בדיקות, משא ומתן, ליווי משפטי ועד קבלת המפתחות.'
  },
  {
    question: 'האם הערכת השווי בחינם?',
    answer: 'כן! אנו מציעים הערכת שווי מקצועית וחינמית ללא כל התחייבות.'
  },
  {
    question: 'איך אתם קובעים את עמלת התיווך?',
    answer: 'העמלה נקבעת על פי חוק - 2% מסכום העסקה בתוספת מע"מ.'
  },
  {
    question: 'מה ההבדל בין השכרה רגילה למנוהלת?',
    answer: 'בהשכרה מנוהלת אנו דואגים לכל - מציאת שוכרים, גביית שכירות, תחזוקה וטיפול בתקלות.'
  },
  {
    question: 'האם אתם עובדים מחוץ לחיפה?',
    answer: 'כן! אנו פועלים בכל אזור הצפון - חיפה, קריות, עכו, נהריה וכל היישובים בסביבה.'
  }
];

const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background-secondary to-background overflow-hidden"
    >
      {/* Simple background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-primary-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className={cn(
                "mb-6 border-primary-500 text-primary-500 bg-primary-500/10 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Sparkles className="w-3 h-3 ml-1" />
              שאלות נפוצות
            </Badge>
            
            <h2 className={cn(
              "text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <span className="text-white">יש לכם </span>
              <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent">
                שאלות?
              </span>
            </h2>
            
            <p className={cn(
              "text-lg md:text-xl text-gray-300 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              התשובות לשאלות הנפוצות ביותר
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "bg-background-card border rounded-xl transition-all duration-500",
                    isActive 
                      ? "border-primary-500 shadow-gold" 
                      : "border-primary-500/20 hover:border-primary-500/40",
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 50}ms` : '0ms'
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full p-4 md:p-6 flex items-center justify-between text-right"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className={cn(
                        "w-5 h-5",
                        isActive ? "text-primary-500" : "text-gray-500"
                      )} />
                      <h3 className={cn(
                        "text-lg font-bold transition-colors",
                        isActive ? "text-primary-400" : "text-white"
                      )}>
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "rotate-180 text-primary-500" : "text-gray-500"
                    )} />
                  </button>
                  
                  {/* Answer */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-500",
                    isActive ? "max-h-40" : "max-h-0"
                  )}>
                    <p className="px-4 md:px-6 pb-4 md:pb-6 text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;