import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

const services = [
  {
    id: 'selling',
    title: 'מכירת נכס',
    icon: '🏠',
    description: 'גלית וחיים ישווקו את הנכס שלכם בצורה המקצועית ביותר וישיגו את המחיר הטוב ביותר',
    image: '/images/services/selling.jpg',
    features: [
      {
        title: 'הערכת שווי מקצועית',
        description: 'הערכה מדויקת של שווי הנכס על בסיס ניתוח שוק מקיף'
      },
      {
        title: 'צילום מקצועי',
        description: 'צילום מקצועי של הנכס כולל צילומי רחפן ותמונות HDR'
      },
      {
        title: 'שיווק רב-ערוצי',
        description: 'פרסום ברשתות החברתיות, פורטלים מובילים ובקרב מאגר הלקוחות שלנו'
      },
      {
        title: 'ליווי משפטי מלא',
        description: 'ליווי צמוד של עורך דין מומחה בכל שלבי העסקה'
      },
      {
        title: 'משא ומתן מקצועי',
        description: 'ניהול משא ומתן מיומן להשגת התנאים הטובים ביותר'
      },
      {
        title: 'ליווי עד סיום העסקה',
        description: 'ליווי מלא עד למסירת המפתחות והעברת הבעלות'
      }
    ],
    process: [
      'פגישת היכרות והערכת הנכס',
      'הכנת תיק נכס מלא כולל צילומים',
      'פרסום ושיווק הנכס',
      'תיאום וליווי סיורים',
      'ניהול משא ומתן',
      'ליווי משפטי וסיום עסקה'
    ]
  },
  {
    id: 'buying',
    title: 'קניית נכס',
    icon: '🔑',
    description: 'נמצא עבורכם את הבית המושלם התואם לצרכים ולתקציב שלכם',
    image: '/images/services/buying.jpg',
    features: [
      {
        title: 'איתור נכסים מתאימים',
        description: 'חיפוש ממוקד של נכסים העונים על כל הדרישות שלכם'
      },
      {
        title: 'גישה לנכסים לפני השוק',
        description: 'גישה למאגר נכסים אקסקלוסיבי טרם פרסומם הפומבי'
      },
      {
        title: 'סיורים וליווי אישי',
        description: 'ליווי מקצועי בסיורים עם הסברים מפורטים על כל נכס'
      },
      {
        title: 'בדיקת היסטוריית הנכס',
        description: 'בדיקה יסודית של ההיסטוריה המשפטית והפיזית של הנכס'
      },
      {
        title: 'ייעוץ משכנתאות',
        description: 'הכוונה וליווי בתהליך קבלת המשכנתא הטובה ביותר'
      },
      {
        title: 'ליווי עד קבלת המפתחות',
        description: 'ליווי מלא בכל שלבי הרכישה עד לכניסה לבית החדש'
      }
    ],
    process: [
      'פגישת ייעוץ ואפיון צרכים',
      'חיפוש ואיתור נכסים מתאימים',
      'תיאום וליווי בסיורים',
      'בדיקות נדרשות לנכס',
      'ניהול משא ומתן',
      'ליווי משפטי ומימוני עד סיום'
    ]
  },
  {
    id: 'rental',
    title: 'השכרה',
    icon: '📋',
    description: 'פתרונות השכרה מקיפים למשכירים ולשוכרים',
    image: '/images/services/rental.jpg',
    features: [
      {
        title: 'איתור שוכרים איכותיים',
        description: 'סינון קפדני של שוכרים פוטנציאליים לביטחון מירבי'
      },
      {
        title: 'בדיקת אמינות',
        description: 'בדיקות רקע מקיפות כולל אישורי הכנסה והמלצות'
      },
      {
        title: 'הכנת חוזים מקצועיים',
        description: 'עריכת חוזי שכירות מפורטים המגנים על שני הצדדים'
      },
      {
        title: 'ניהול נכס',
        description: 'שירותי ניהול נכס מלאים למשכירים (אופציונלי)'
      },
      {
        title: 'תיווך מהיר',
        description: 'השכרת הנכס בזמן הקצר ביותר במחיר האופטימלי'
      },
      {
        title: 'ליווי לאורך השכירות',
        description: 'תמיכה וייעוץ לאורך כל תקופת השכירות'
      }
    ],
    process: [
      'הערכת דמי שכירות ראויים',
      'צילום ופרסום הנכס',
      'סינון וראיונות שוכרים',
      'בדיקות אמינות',
      'הכנת חוזה מקצועי',
      'ליווי במסירת הנכס'
    ]
  },
  {
    id: 'valuation',
    title: 'הערכת שווי וייעוץ',
    icon: '📊',
    description: 'הערכת שווי מקצועית וייעוץ מקיף לקבלת החלטות מושכלות',
    image: '/images/services/valuation.jpg',
    features: [
      {
        title: 'הערכת שווי מדויקת',
        description: 'הערכה מקצועית המבוססת על ניתוח שוק מעמיק'
      },
      {
        title: 'ניתוח השוואתי',
        description: 'השוואה לנכסים דומים שנמכרו באזור לאחרונה'
      },
      {
        title: 'ייעוץ השקעה',
        description: 'ייעוץ מקיף לגבי פוטנציאל ההשקעה והתשואה הצפויה'
      },
      {
        title: 'דוחות מפורטים',
        description: 'דוח הערכה מקצועי ומפורט עם כל הנתונים הרלוונטיים'
      },
      {
        title: 'ייעוץ שיפוצים',
        description: 'המלצות לשיפוצים שיעלו את ערך הנכס'
      },
      {
        title: 'ליווי מתמשך',
        description: 'ייעוץ וליווי מתמשך בכל שאלה או התלבטות'
      }
    ],
    process: [
      'סיור מקצועי בנכס',
      'איסוף נתונים וניתוח שוק',
      'הכנת הערכת שווי מפורטת',
      'הצגת הממצאים והמלצות',
      'מענה על שאלות',
      'ליווי בהחלטות עתידיות'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">השירותים שלנו</h1>
            <p className="text-xl text-gray-600">
              צוות שפס נדל"ן מציע מגוון שירותי נדל"ן מקיפים עם ליווי אישי ומקצועי בכל שלב.
              הניסיון הרב שצברנו לאורך השנים מאפשר לנו להעניק לכם את השירות הטוב ביותר.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">{service.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-4">תהליך העבודה שלנו:</h4>
                  <ol className="space-y-2">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    קבלו ייעוץ חינם
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[500px] rounded-lg overflow-hidden shadow-xl ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            בין אם אתם מוכרים, קונים, משכירים או רק רוצים לדעת כמה שווה הנכס שלכם - 
            גלית וחיים שפס כאן בשבילכם עם ניסיון משותף של {SITE_CONFIG.license.split(': ')[1]} שנים בשוק הנדל"ן בחיפה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              קבעו פגישת ייעוץ
            </Link>
            <div className="flex gap-4 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                גלית
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone2}`}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                חיים
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}