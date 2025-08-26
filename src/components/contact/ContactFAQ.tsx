'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'מהן שעות הפעילות שלכם?',
      answer: 'אנחנו פתוחים ראשון-חמישי 09:00-19:00, שישי 09:00-14:00. עם זאת, אנחנו זמינים טלפונית גם מחוץ לשעות הפעילות למקרים דחופים.',
    },
    {
      question: 'כמה זמן לוקח לקבל תשובה?',
      answer: 'אנחנו משתדלים לענות תוך 24 שעות. בדרך כלל התגובה מגיעה הרבה יותר מהר - תוך מספר שעות.',
    },
    {
      question: 'האם אפשר לקבוע פגישה מחוץ למשרד?',
      answer: 'בהחלט! אנחנו מגיעים ללקוחות לבית או לכל מקום נוח אחר. פשוט תאמו איתנו מראש.',
    },
    {
      question: 'איך עדיף ליצור קשר לקבלת מענה מהיר?',
      answer: 'לתגובה הכי מהירה - התקשרו אלינו ישירות או שלחו וואטסאפ. לנושאים שאינם דחופים, מוזמנים לשלוח אימייל או למלא את הטופס.',
    },
    {
      question: 'האם המשרד נגיש לבעלי מוגבלויות?',
      answer: 'כן, המשרד שלנו נגיש לחלוטין עם מעלית וחניית נכים צמודה.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge variant="solid" icon={HelpCircle} className="mb-4 animate-fade-in" glow>
            שאלות נפוצות
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">יש לכם </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              שאלות?
            </span>
          </h2>
          
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animation-delay-200">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-6 h-6 text-primary-500" />
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>
          
          <p className="text-dark-300 animate-slide-up animation-delay-300">
            כאן תמצאו תשובות לשאלות הנפוצות
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              variant={openIndex === index ? 'luxury' : 'default'}
              className="transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-dark-900/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-dark-800">
                    <p className="text-dark-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-300 mb-6">
            לא מצאתם את התשובה שחיפשתם?
          </p>
          <Link href="#contact-form">
            <Button variant="primary" icon={Phone} size="lg" glow>
              צרו איתנו קשר
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;