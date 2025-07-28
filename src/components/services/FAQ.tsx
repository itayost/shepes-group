'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'כמה עולה שירות התיווך?',
    answer: 'עמלת התיווך נקבעת על פי חוק ועומדת על 2% מערך העסקה בתוספת מע"מ. במכירת נכס, העמלה מתחלקת בדרך כלל בין המוכר לקונה. אנו תמיד נהיה שקופים לגבי העלויות מראש.'
  },
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'זמן המכירה תלוי במספר גורמים כמו מיקום הנכס, מחיר, מצב השוק ועוד. בממוצע, נכסים שלנו נמכרים תוך 21 ימים, אך יש נכסים שנמכרים מהר יותר ויש שלוקחים יותר זמן.'
  },
  {
    question: 'האם אתם מטפלים גם בהיבטים המשפטיים?',
    answer: 'בהחלט! אנו עובדים עם עורכי דין מומחים בתחום הנדל"ן ומלווים את הלקוחות שלנו בכל ההיבטים המשפטיים של העסקה, מבדיקת זכויות ועד רישום בטאבו.'
  },
  {
    question: 'מה כולל שירות הערכת השווי?',
    answer: 'הערכת השווי שלנו כוללת סיור מקיף בנכס, ניתוח השוואתי לנכסים דומים באזור, בדיקת מגמות שוק, והכנת דוח מפורט עם המלצות. השירות ניתן בעלות סמלית או חינם ללקוחות שחותמים איתנו על הסכם בלעדיות.'
  },
  {
    question: 'האם אתם עובדים עם כל חברות המשכנתאות?',
    answer: 'כן, אנו עובדים עם כל הבנקים וחברות המשכנתאות בישראל. יש לנו קשרים מצוינים עם יועצי משכנתאות מומחים שיעזרו לכם למצוא את המשכנתא הטובה ביותר.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          שאלות נפוצות
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            לא מצאתם תשובה לשאלה שלכם?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            צרו איתנו קשר
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;