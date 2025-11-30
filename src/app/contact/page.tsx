// File: src/app/contact/page.tsx

import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import { SITE_CONFIG } from '@/lib/constants';

const pageDescription = 'נשמח לשמוע ממך! צור איתנו קשר וניצור קשר בהקדם - טלפון, וואטסאפ או שלחו לנו הודעה';

// FAQ data for schema
const faqData = [
  {
    question: 'כמה עולה השירות שלכם?',
    answer: 'עמלת התיווך שלנו היא בהתאם לחוק - 2% מסכום העסקה בתוספת מע"מ. אנו מציעים גם שירותי הערכת שווי חינם ללקוחותינו, וליווי מלא לאורך כל תהליך המכירה או הקנייה.',
  },
  {
    question: 'כמה זמן לוקח למכור נכס?',
    answer: 'בממוצע, נכסים שלנו נמכרים תוך 21 ימים בלבד! זמן המכירה תלוי במספר גורמים כמו מיקום, מחיר, מצב הנכס ותנאי השוק.',
  },
  {
    question: 'האם אתם מספקים ליווי משפטי?',
    answer: 'אנו עובדים עם עורכי דין מומחים בתחום הנדל"ן ומלווים אתכם בכל ההיבטים המשפטיים של העסקה.',
  },
  {
    question: 'איזה אזורים אתם מכסים?',
    answer: 'אנו מתמחים בחיפה והצפון - כל שכונות חיפה, הקריות, טירת כרמל, נשר, קריית אתא ועוד.',
  },
  {
    question: 'מה כולל שירות ניהול נכסים?',
    answer: 'שירות ניהול הנכסים שלנו כולל: מציאת שוכרים איכותיים, בדיקות אשראי ורקע, הכנת חוזי שכירות, גביית שכר דירה, טיפול בתחזוקה שוטפת.',
  },
  {
    question: 'האם אתם יכולים לעזור במשכנתא?',
    answer: 'בהחלט! אנו עובדים עם יועצי משכנתאות מקצועיים שיעזרו לכם להשיג את התנאים הטובים ביותר.',
  },
];

export const metadata = {
  title: 'צור קשר | ' + SITE_CONFIG.name,
  description: pageDescription,
  keywords: ['צור קשר', 'יצירת קשר', 'שפס גרופ', 'חיפה', 'נדל"ן'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: 'צור קשר | ' + SITE_CONFIG.name,
    description: pageDescription,
    url: `${SITE_CONFIG.url}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-gradient-luxury">
        {/* Hero Section with Quick Contact Methods */}
        <ContactHero />

        {/* Contact Info Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ContactFAQ />
      </main>
    </>
  );
}