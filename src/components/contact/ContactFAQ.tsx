// File: src/components/contact/ContactFAQ.tsx

'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="primary" icon={HelpCircle} className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
            שאלות נפוצות
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            יש לכם שאלות?
          </h2>
          <p className="text-gray-400">
            כאן תמצאו תשובות לשאלות הנפוצות
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              variant={openIndex === index ? 'elevated' : 'default'}
              className="transition-all duration-300 bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            לא מצאתם את התשובה שחיפשתם?
          </p>
          <Link href="#contact-form">
            <Button 
              variant="primary" 
              icon={Phone}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37] shadow-gold hover:shadow-gold-glow"
            >
              צרו איתנו קשר
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;