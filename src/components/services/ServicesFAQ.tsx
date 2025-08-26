'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
<<<<<<< HEAD
import { ChevronDown, HelpCircle, MessageCircle, Phone, Plus } from 'lucide-react';
import Link from 'next/link';
=======
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
>>>>>>> parent of 0101384 (םל)
import { useState } from 'react';

const faqs = [
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'בממוצע, אנחנו מוכרים נכסים תוך 21 ימים. הזמן המדויק תלוי במיקום, מחיר ומצב הנכס.',
    category: 'selling'
  },
  {
    question: 'מה כולל השירות של ליווי בקנייה?',
    answer: 'ליווי מלא החל מחיפוש הנכס, בדיקות, משא ומתן, ליווי משפטי ועד קבלת המפתחות.',
    category: 'buying'
  },
  {
    question: 'האם הערכת השווי בחינם?',
    answer: 'כן, אנו מציעים הערכת שווי חינם ללא התחייבות לכל לקוחותינו.',
    category: 'valuation'
  },
  {
    question: 'איך אתם קובעים את עמלת התיווך?',
    answer: 'העמלה נקבעת על פי חוק התיווך במקרקעין ובהתאם לסוג ושווי הנכס.',
    category: 'general'
  },
  {
    question: 'מה ההבדל בין השכרה רגילה להשכרה מנוהלת?',
    answer: 'בהשכרה מנוהלת אנו דואגים לכל - מציאת שוכרים, גביית שכירות, תחזוקה וטיפול בתקלות.',
    category: 'rental'
  },
  {
    question: 'האם אתם עובדים גם מחוץ לחיפה?',
    answer: 'כן, אנו פועלים בכל אזור הצפון - חיפה, קריות, עכו, נהריה וכל היישובים בסביבה.',
    category: 'general'
  }
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" icon={HelpCircle} className="mb-4">
            שאלות נפוצות
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            יש לכם שאלות? יש לנו תשובות
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ריכזנו עבורכם את השאלות הנפוצות ביותר
          </p>
        </div>

        {/* FAQ List */}
<<<<<<< HEAD
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
                  <div className="w-full">
                    {/* Clickable Header Section */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-8 text-left group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black"
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
                    </button>
                    
                    {/* Answer Section - Outside the button */}
                    <div className={`
                      grid transition-all duration-500 ease-in-out
                      ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                    `}>
                      <div className="overflow-hidden">
                        <div className="px-8 pb-8">
                          <div className="pr-16">
                            <p className="text-dark-300 leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            
                            {/* Action Button - Now safely outside the main button */}
                            <Link href={`/services#${faq.category}`}>
                              <Button 
                                variant="outline" 
                                size="sm"
                                icon={Plus}
                                className="text-primary-400 border-primary-500/30 hover:border-primary-500"
                              >
                                קרא עוד על {category.label}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <Link href="/contact">
                  <Button variant="gradient" size="lg" icon={Phone} glow>
                    דברו איתנו עכשיו
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" icon={MessageCircle}>
                    שלחו הודעה
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
=======
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              variant={openIndex === index ? 'elevated' : 'default'}
              className="transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary-600">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pr-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      <Badge 
                        variant="outline" 
                        size="sm" 
                        className="mt-3"
                      >
                        {faq.category === 'selling' && 'מכירה'}
                        {faq.category === 'buying' && 'קנייה'}
                        {faq.category === 'rental' && 'השכרה'}
                        {faq.category === 'valuation' && 'הערכת שווי'}
                        {faq.category === 'general' && 'כללי'}
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            לא מצאתם תשובה לשאלה שלכם?
          </p>
          <Button variant="primary" size="lg" icon={Phone}>
            דברו איתנו
          </Button>
>>>>>>> parent of 0101384 (םל)
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;