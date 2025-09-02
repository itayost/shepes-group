// File: src/components/contact/ContactFAQ.tsx

'use client';

import Badge from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  HelpCircle,
  Home,
  Key,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  icon: typeof HelpCircle;
}

const faqData: FAQItem[] = [
  {
    question: 'כמה עולה השירות שלכם?',
    answer: 'עמלת התיווך שלנו היא בהתאם לחוק - 2% מסכום העסקה בתוספת מע"מ. אנו מציעים גם שירותי הערכת שווי חינם ללקוחותינו, וליווי מלא לאורך כל תהליך המכירה או הקנייה.',
    icon: TrendingUp
  },
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'בממוצע, נכסים שלנו נמכרים תוך 21 ימים בלבד! זמן המכירה תלוי במספר גורמים כמו מיקום, מחיר, מצב הנכס ותנאי השוק. אנו עובדים בשיטות שיווק מתקדמות כדי להאיץ את התהליך תוך השגת המחיר הטוב ביותר.',
    icon: Home
  },
  {
    question: 'האם אתם מספקים ליווי משפטי?',
    answer: 'אנו עובדים עם עורכי דין מומחים בתחום הנדל"ן ומלווים אתכם בכל ההיבטים המשפטיים של העסקה. הליווי כולל בדיקת זכויות, הכנת חוזים, ליווי עד לרישום בטאבו והבטחת עסקה בטוחה ושקופה.',
    icon: Shield
  },
  {
    question: 'איזה אזורים אתם מכסים?',
    answer: 'אנו מתמחים בחיפה והצפון - כל שכונות חיפה, הקריות, טירת כרמל, נשר, קריית אתא ועוד. הניסיון הרב שלנו של 18+ שנים באזור מאפשר לנו להכיר כל שכונה ורחוב ולספק את השירות הטוב ביותר.',
    icon: Users
  },
  {
    question: 'מה כולל שירות ניהול נכסים?',
    answer: 'שירות ניהול הנכסים שלנו כולל: מציאת שוכרים איכותיים, בדיקות אשראי ורקע, הכנת חוזי שכירות, גביית שכר דירה, טיפול בתחזוקה שוטפת, ייצוג מול השוכרים וטיפול בכל בעיה שעולה - הכל כדי שתוכלו להיות רגועים.',
    icon: Key
  },
  {
    question: 'האם אתם יכולים לעזור במשכנתא?',
    answer: 'בהחלט! אנו עובדים עם יועצי משכנתאות מקצועיים שיעזרו לכם להשיג את התנאים הטובים ביותר. הייעוץ כולל בדיקת זכאות, השוואת הצעות מבנקים שונים, ליווי בתהליך האישור וסיוע עד לקבלת הכספים.',
    icon: TrendingUp
  }
];

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(faqData.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger staggered animations
          faqData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
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

  // Toggle FAQ item
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-black-gold overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-primary-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge 
              variant="outline" 
              className={cn(
                "mb-6 transition-all duration-700",
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
              <span className="text-text-primary">יש לך </span>
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                שאלות?
              </span>
            </h2>
            
            <p className={cn(
              "text-lg md:text-xl text-text-secondary max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              ריכזנו עבורך את התשובות לשאלות הנפוצות ביותר
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "bg-background-card border rounded-xl transition-all duration-500",
                    isActive 
                      ? "border-primary-500 shadow-gold" 
                      : "border-primary-500/20 hover:border-primary-500/40",
                    visibleItems[index] 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  )}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 md:p-6 flex items-start gap-4 text-right transition-all"
                  >
                    {/* Icon */}
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                      isActive 
                        ? "bg-gradient-gold shadow-gold" 
                        : "bg-primary-500/10"
                    )}>
                      <Icon className={cn(
                        "w-5 h-5 md:w-6 md:h-6",
                        isActive ? "text-background" : "text-primary-500"
                      )} />
                    </div>
                    
                    {/* Question & Arrow */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={cn(
                          "text-lg md:text-xl font-bold text-right transition-colors",
                          isActive ? "text-text-gold-bright" : "text-text-primary"
                        )}>
                          {item.question}
                        </h3>
                        <ChevronDown className={cn(
                          "w-5 h-5 flex-shrink-0 transition-all duration-300 mt-1",
                          isActive 
                            ? "rotate-180 text-primary-500" 
                            : "text-text-muted"
                        )} />
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-500",
                    isActive ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <div className="pr-14 md:pr-16 border-r-2 border-primary-500/20">
                        <p className="text-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className={cn(
            "text-center mt-12 p-6 md:p-8 bg-gradient-to-r from-background-card to-background-secondary rounded-xl border border-primary-500/20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: '800ms' }}>
            <HelpCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
              לא מצאת את התשובה שחיפשת?
            </h3>
            <p className="text-text-muted mb-6">
              אל תהסס ליצור איתנו קשר, נשמח לענות על כל שאלה
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-background font-medium rounded-lg hover:shadow-gold-glow transition-all"
              >
                <Phone className="w-5 h-5" />
                התקשר עכשיו
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-success-500 text-white font-medium rounded-lg hover:bg-success-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;