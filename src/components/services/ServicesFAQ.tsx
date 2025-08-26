'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
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
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;