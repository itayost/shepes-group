import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'השירותים שלנו',
  description: 'גלה את מגוון השירותים שלנו - פיתוח אתרים, עיצוב, קידום ועוד.',
  keywords: ['שירותים', 'פיתוח אתרים', 'עיצוב', 'קידום אתרים', 'שיווק דיגיטלי'],
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              השירותים שלנו
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              פתרונות מקצועיים ומותאמים אישית לכל צורך עסקי
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-3xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary-600 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full">
                      קרא עוד
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            איך אנחנו עובדים
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            חבילות ומחירים
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.featured ? 'border-primary-600 shadow-xl' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm text-white">
                    הכי פופולרי
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₪{pkg.price}</span>
                    <span className="text-gray-600">/חודש</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={pkg.featured ? 'primary' : 'outline'}
                  >
                    בחר חבילה
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">
            לא בטוחים איזה שירות מתאים לכם?
          </h2>
          <p className="mb-8 text-xl">
            נשמח לייעץ ולהתאים את הפתרון המושלם עבורכם
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              קבלו ייעוץ חינם
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

// Sample data - replace with actual services
const services = [
  {
    icon: '🌐',
    title: 'פיתוח אתרים',
    slug: 'web-development',
    description: 'אתרים מותאמים אישית עם הטכנולוגיות המתקדמות ביותר',
    features: [
      'עיצוב רספונסיבי',
      'מהירות טעינה גבוהה',
      'אבטחה מתקדמת',
      'תמיכה בעברית מלאה',
    ],
  },
  {
    icon: '📱',
    title: 'אפליקציות מובייל',
    slug: 'mobile-apps',
    description: 'אפליקציות לאנדרואיד ו-iOS עם חוויית משתמש מעולה',
    features: [
      'פיתוח נייטיב',
      'React Native',
      'עיצוב מותאם למובייל',
      'פרסום בחנויות',
    ],
  },
  {
    icon: '🎨',
    title: 'עיצוב UI/UX',
    slug: 'ui-ux-design',
    description: 'עיצוב ממשקים יפים ונוחים לשימוש',
    features: [
      'מחקר משתמשים',
      'אב טיפוס אינטראקטיבי',
      'עיצוב מותאם מותג',
      'בדיקות שימושיות',
    ],
  },
  {
    icon: '🛒',
    title: 'חנויות אונליין',
    slug: 'ecommerce',
    description: 'פתרונות מסחר אלקטרוני מתקדמים',
    features: [
      'מערכת ניהול מלאה',
      'תשלומים מאובטחים',
      'ניהול מלאי',
      'דוחות ואנליטיקס',
    ],
  },
  {
    icon: '🚀',
    title: 'קידום אתרים',
    slug: 'seo',
    description: 'הופיעו בתוצאות החיפוש הראשונות בגוגל',
    features: [
      'מחקר מילות מפתח',
      'אופטימיזציה טכנית',
      'בניית קישורים',
      'דוחות חודשיים',
    ],
  },
  {
    icon: '📊',
    title: 'שיווק דיגיטלי',
    slug: 'digital-marketing',
    description: 'קמפיינים ממוקדים להגדלת המכירות',
    features: [
      'גוגל Ads',
      'פייסבוק ואינסטגרם',
      'שיווק באימייל',
      'ניתוח ביצועים',
    ],
  },
];

const process = [
  {
    title: 'פגישת ייעוץ',
    description: 'נכיר אתכם, נבין את הצרכים ונגדיר יחד את היעדים של הפרויקט.',
  },
  {
    title: 'תכנון ואסטרטגיה',
    description: 'נבנה תוכנית עבודה מפורטת עם אבני דרך ולוחות זמנים ברורים.',
  },
  {
    title: 'עיצוב ופיתוח',
    description: 'הצוות שלנו יתחיל לעבוד על הפרויקט תוך עדכונים שוטפים.',
  },
  {
    title: 'בדיקות ושיפורים',
    description: 'נבדוק את המוצר לעומק ונבצע שיפורים על פי המשוב שלכם.',
  },
  {
    title: 'השקה ותמיכה',
    description: 'נעלה את הפרויקט לאוויר ונמשיך ללוות אתכם לאורך הדרך.',
  },
];

const packages = [
  {
    name: 'בסיסי',
    price: '2,999',
    featured: false,
    features: [
      'אתר עד 5 עמודים',
      'עיצוב רספונסיבי',
      'טופס יצירת קשר',
      'אחסון לשנה',
      'תמיכה באימייל',
    ],
  },
  {
    name: 'מקצועי',
    price: '5,999',
    featured: true,
    features: [
      'אתר עד 15 עמודים',
      'עיצוב מותאם אישית',
      'מערכת ניהול תוכן',
      'אופטימיזציה למנועי חיפוש',
      'אחסון ותחזוקה לשנה',
      'תמיכה טלפונית',
    ],
  },
  {
    name: 'עסקי',
    price: '9,999',
    featured: false,
    features: [
      'אתר ללא הגבלת עמודים',
      'עיצוב ייחודי מותאם מותג',
      'פיתוח מותאם אישית',
      'אינטגרציות מתקדמות',
      'אחסון VIP ותחזוקה',
      'תמיכה 24/7',
      'שיווק דיגיטלי בסיסי',
    ],
  },
];