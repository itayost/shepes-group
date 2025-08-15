'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'בממוצע, אנחנו מוכרים נכסים תוך 21 ימים. הזמן המדויק תלוי במיקום, מחיר ומצב הנכס. הניסיון הרב שלנו והשיווק המקצועי מאפשרים לנו להשיג תוצאות מהירות ויעילות.',
    category: 'selling',
    icon: '🏠'
  },
  {
    question: 'מה כולל השירות של ליווי בקנייה?',
    answer: 'ליווי מלא החל מחיפוש הנכס, בדיקות מקיפות, משא ומתן מקצועי, ליווי משפטי מלא ועד קבלת המפתחות. אנחנו איתכם בכל שלב כדי להבטיח שתקבלו את הנכס הטוב ביותר עבורכם.',
    category: 'buying',
    icon: '🔑'
  },
  {
    question: 'האם הערכת השווי בחינם?',
    answer: 'כן, אנו מציעים הערכת שווי חינם ללא התחייבות לכל לקוחותינו. ההערכה כוללת ניתוח מעמיק של השוק, השוואה לנכסים דומים וחוות דעת מקצועית מפורטת.',
    category: 'valuation',
    icon: '📊'
  },
  {
    question: 'איך אתם קובעים את עמלת התיווך?',
    answer: 'העמלה נקבעת על פי חוק התיווך במקרקעין ובהתאם לסוג ושווי הנכס. אנחנו שקופים לחלוטין לגבי העמלות ומסבירים בדיוק מה כלול בשירות.',
    category: 'general',
    icon: '💰'
  },
  {
    question: 'מה ההבדל בין השכרה רגילה להשכרה מנוהלת?',
    answer: 'בהשכרה מנוהלת אנו דואגים לכל - מציאת שוכרים איכותיים, בדיקות אמינות, גביית שכירות, תחזוקה שוטפת וטיפול בתקלות. השירות מושלם למי שרוצה להשכיר ללא כאבי ראש.',
    category: 'rental',
    icon: '📋'
  },
  {
    question: 'האם אתם עובדים גם מחוץ לחיפה?',
    answer: 'כן, אנו פועלים בכל אזור הצפון - חיפה, קריות, עכו, נהריה וכל היישובים בסביבה. הידע המקומי שלנו מאפשר לנו לתת שירות מעולה בכל האזור.',
    category: 'general',
    icon: '📍'
  }
];

const categoryBadges = {
  selling: { label: 'מכירה', color: 'primary' },
  buying: { label: 'קנייה', color: 'secondary' },
  rental: { label: 'השכרה', color: 'outline' },
  valuation: { label: 'הערכת שווי', color: 'ghost' },
  general: { label: 'כללי', color: 'primary' },
};

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="solid" size="lg" icon={HelpCircle} className="mb-6 animate-fade-in shadow-gold-lg" glow>
            שאלות נפוצות
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-white">יש לכם </span>
            <span className="text-gradient-gold">שאלות?</span>
            <br />
            <span className="text-white">יש לנו </span>
            <span className="text-gradient-gold">תשובות</span>
          </h2>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            ריכזנו עבורכם את השאלות הנפוצות ביותר
          </p>
          
          {/* Luxury Divider */}
          <div className="divider-gold mt-8" />
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const category = categoryBadges[faq.category as keyof typeof categoryBadges];
            
            return (
              <Card 
                key={index}
                variant={isOpen ? 'luxury' : 'glass'}
                className={`
                  transition-all duration-500 overflow-hidden
                  ${isOpen ? 'shadow-gold-lg scale-[1.02]' : 'hover:border-primary-500/30'}
                `}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 text-left group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Number/Icon */}
                        <div className="relative">
                          <div className={`
                            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                            ${isOpen 
                              ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-gold' 
                              : 'bg-dark-900 group-hover:bg-dark-800'
                            }
                            transition-all duration-300
                          `}>
                            <span className={`text-xl ${isOpen ? '' : 'grayscale'}`}>
                              {faq.icon}
                            </span>
                          </div>
                          {isOpen && (
                            <div className="absolute inset-0 bg-primary-500/30 rounded-xl blur-xl" />
                          )}
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1">
                          <h3 className={`
                            text-xl font-semibold mb-2 transition-colors duration-300
                            ${isOpen ? 'text-primary-400' : 'text-white group-hover:text-primary-400'}
                          `}>
                            {faq.question}
                          </h3>
                          
                          {/* Category Badge */}
                          <Badge 
                            variant={category.color as any}
                            size="sm"
                            className={isOpen ? 'opacity-100' : 'opacity-70'}
                          >
                            {category.label}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className={`
                        p-2 rounded-full transition-all duration-500
                        ${isOpen ? 'bg-primary-500/20' : 'bg-dark-900'}
                      `}>
                        <ChevronDown 
                          className={`
                            w-5 h-5 transition-all duration-500
                            ${isOpen ? 'rotate-180 text-primary-400' : 'text-dark-400 group-hover:text-primary-400'}
                          `}
                        />
                      </div>
                    </div>
                    
                    {/* Answer */}
                    <div className={`
                      grid transition-all duration-500 ease-in-out
                      ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}
                    `}>
                      <div className="overflow-hidden">
                        <div className="pr-16">
                          <p className="text-dark-300 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          
                          {/* Action Button */}
                          <Button 
                            variant="outline" 
                            size="sm"
                            icon={Plus}
                            className="text-primary-400 border-primary-500/30 hover:border-primary-500"
                          >
                            קרא עוד על {category.label}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card variant="luxury" className="max-w-2xl mx-auto p-8">
            <div className="flex flex-col items-center">
              <MessageCircle className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                לא מצאתם תשובה לשאלה שלכם?
              </h3>
              <p className="text-dark-300 mb-6">
                צוות המומחים שלנו זמין לענות על כל שאלה
              </p>
              <div className="flex gap-4">
                <Button variant="gradient" size="lg" icon={Phone} glow>
                  דברו איתנו עכשיו
                </Button>
                <Button variant="outline" size="lg" icon={MessageCircle}>
                  שלחו הודעה
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;