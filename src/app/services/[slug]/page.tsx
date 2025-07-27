import ContactForm from '@/components/common/ContactForm';
import { generateSEO } from '@/components/common/SEO';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const serviceDetails = {
  'web-development': {
    title: 'פיתוח אתרים',
    description: 'פיתוח אתרים מקצועיים עם הטכנולוגיות המתקדמות ביותר',
    longDescription: `
      אנחנו מתמחים בפיתוח אתרים מותאמים אישית שמביאים תוצאות. 
      הצוות שלנו משתמש בטכנולוגיות המתקדמות ביותר כדי ליצור אתרים מהירים, 
      מאובטחים ונוחים לשימוש שמקדמים את העסק שלכם.
    `,
    features: [
      {
        title: 'טכנולוגיות מתקדמות',
        description: 'Next.js, React, TypeScript ועוד הטכנולוגיות החדשות ביותר',
      },
      {
        title: 'ביצועים מעולים',
        description: 'אתרים מהירים עם ציוני מדהימים ב-Google PageSpeed',
      },
      {
        title: 'אבטחה מקסימלית',
        description: 'הגנה מפני איומים עם אבטחה ברמה הגבוהה ביותר',
      },
      {
        title: 'תמיכה מלאה',
        description: 'ליווי צמוד ותמיכה טכנית לאורך כל הדרך',
      },
    ],
  },
  'mobile-apps': {
    title: 'אפליקציות מובייל',
    description: 'פיתוח אפליקציות מובייל לאנדרואיד ו-iOS',
    longDescription: `
      פיתוח אפליקציות מובייל מותאמות אישית עם חוויית משתמש מעולה.
      אנו מתמחים בפיתוח נייטיב ו-React Native לכל הפלטפורמות.
    `,
    features: [
      {
        title: 'פיתוח חוצה פלטפורמות',
        description: 'אפליקציה אחת שעובדת מצוין גם באנדרואיד וגם ב-iOS',
      },
      {
        title: 'ביצועים נייטיביים',
        description: 'מהירות וחלקות כמו אפליקציות נייטיב',
      },
      {
        title: 'עיצוב מותאם',
        description: 'ממשק משתמש אינטואיטיבי ויפה',
      },
      {
        title: 'פרסום בחנויות',
        description: 'טיפול מלא בתהליך הפרסום ב-App Store ו-Google Play',
      },
    ],
  },
  'ui-ux-design': {
    title: 'עיצוב UI/UX',
    description: 'עיצוב ממשקים יפים ונוחים לשימוש',
    longDescription: `
      עיצוב חוויית משתמש וממשק משתמש שמשלבים אסתטיקה עם פונקציונליות.
      אנו יוצרים עיצובים שמושכים את העין ונוחים לשימוש.
    `,
    features: [
      {
        title: 'מחקר משתמשים',
        description: 'הבנה מעמיקה של קהל היעד והצרכים שלו',
      },
      {
        title: 'אבות טיפוס',
        description: 'יצירת פרוטוטייפים אינטראקטיביים לבדיקה',
      },
      {
        title: 'עיצוב רספונסיבי',
        description: 'עיצוב שנראה מושלם בכל מכשיר',
      },
      {
        title: 'מערכת עיצוב',
        description: 'יצירת שפה עיצובית עקבית למותג',
      },
    ],
  },
  'ecommerce': {
    title: 'חנויות אונליין',
    description: 'פתרונות מסחר אלקטרוני מתקדמים',
    longDescription: `
      הקמת חנויות אונליין מקצועיות עם כל הכלים להצלחה במסחר האלקטרוני.
      מערכות ניהול מתקדמות, עיצוב מושך ותהליך קנייה חלק.
    `,
    features: [
      {
        title: 'מערכת ניהול מלאה',
        description: 'ניהול מוצרים, מלאי והזמנות בקלות',
      },
      {
        title: 'תשלומים מאובטחים',
        description: 'אינטגרציה עם כל שיטות התשלום המובילות',
      },
      {
        title: 'עיצוב ממוקד המרות',
        description: 'עיצוב שמעודד רכישות ומגדיל מכירות',
      },
      {
        title: 'אנליטיקס מתקדם',
        description: 'מעקב אחר ביצועים ודוחות מפורטים',
      },
    ],
  },
  'seo': {
    title: 'קידום אתרים',
    description: 'הופיעו בתוצאות החיפוש הראשונות בגוגל',
    longDescription: `
      קידום אורגני מקצועי שמביא תוצאות. אנו משתמשים בטכניקות המתקדמות ביותר
      כדי להעלות את הדירוג שלכם בגוגל ולהביא יותר לקוחות.
    `,
    features: [
      {
        title: 'מחקר מילות מפתח',
        description: 'מציאת מילות המפתח הרווחיות ביותר לעסק שלכם',
      },
      {
        title: 'אופטימיזציה טכנית',
        description: 'שיפור מבנה האתר ומהירות הטעינה',
      },
      {
        title: 'בניית קישורים',
        description: 'יצירת פרופיל קישורים איכותי',
      },
      {
        title: 'דוחות חודשיים',
        description: 'מעקב אחר התקדמות ותוצאות',
      },
    ],
  },
  'digital-marketing': {
    title: 'שיווק דיגיטלי',
    description: 'קמפיינים ממוקדים להגדלת המכירות',
    longDescription: `
      שיווק דיגיטלי מקצועי שמביא תוצאות מדידות. אנו מנהלים קמפיינים ממוקדים
      בכל הפלטפורמות המובילות כדי להביא לכם לקוחות איכותיים.
    `,
    features: [
      {
        title: 'גוגל Ads',
        description: 'קמפיינים ממוקדים ברשת החיפוש והתצוגה',
      },
      {
        title: 'פייסבוק ואינסטגרם',
        description: 'פרסום ברשתות החברתיות המובילות',
      },
      {
        title: 'שיווק באימייל',
        description: 'קמפיינים ממוקדים ללקוחות קיימים',
      },
      {
        title: 'אופטימיזציה מתמדת',
        description: 'שיפור מתמיד של הקמפיינים לתוצאות מקסימליות',
      },
    ],
  },
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  
  if (!service) {
    return generateSEO({ title: 'שירות לא נמצא' });
  }

  return generateSEO({
    title: service.title,
    description: service.description,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary-600 hover:underline mb-6">
              <span>→</span>
              חזרה לשירותים
            </Link>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">על השירות</h2>
              <p className="mb-8 text-gray-600 whitespace-pre-line">
                {service.longDescription}
              </p>
              
              <h3 className="mb-6 text-xl font-bold">מה כולל השירות?</h3>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      ✓
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}