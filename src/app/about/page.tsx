import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'אודות',
  description: 'למד עוד על החברה שלנו, הערכים שלנו, הצוות שלנו וההיסטוריה שלנו.',
  keywords: ['אודות', 'על החברה', 'הצוות שלנו', 'הסיפור שלנו'],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              הסיפור שלנו
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              מאז 2020, אנחנו עוזרים לעסקים להצליח בעולם הדיגיטלי 
              עם פתרונות מותאמים אישית ושירות יוצא דופן.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl">
                  🎯
                </div>
                <CardTitle>המשימה שלנו</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  לספק פתרונות דיגיטליים מתקדמים שעוזרים לעסקים לצמוח 
                  ולהצליח בעידן המודרני.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl">
                  💡
                </div>
                <CardTitle>החזון שלנו</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  להיות השותף הטכנולוגי המוביל עבור עסקים שרוצים 
                  לחדש ולהוביל בתחומם.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl">
                  🤝
                </div>
                <CardTitle>הערכים שלנו</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  מקצועיות, יצירתיות, שקיפות ומחויבות מלאה 
                  להצלחת הלקוחות שלנו.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            במספרים
          </h2>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="mb-2 text-4xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            הצוות שלנו
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                    {/* Add actual images in production */}
                    <div className="flex h-full items-center justify-center text-4xl">
                      {member.emoji}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
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
            רוצים לעבוד איתנו?
          </h2>
          <p className="mb-8 text-xl">
            בואו נבנה יחד את העתיד הדיגיטלי של העסק שלכם
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                צרו קשר
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                השירותים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Sample data - replace with actual content
const stats = [
  { value: '120+', label: 'לקוחות מרוצים' },
  { value: '250+', label: 'פרויקטים הושלמו' },
  { value: '5+', label: 'שנות ניסיון' },
  { value: '98%', label: 'שביעות רצון' },
];

const team = [
  {
    name: 'ישראל ישראלי',
    role: 'מנכ"ל ומייסד',
    bio: 'מוביל את החזון והאסטרטגיה של החברה',
    emoji: '👨‍💼',
  },
  {
    name: 'שרה כהן',
    role: 'מנהלת עיצוב',
    bio: 'אחראית על החוויה הויזואלית',
    emoji: '👩‍🎨',
  },
  {
    name: 'דוד לוי',
    role: 'מפתח ראשי',
    bio: 'מוביל את הפיתוח הטכנולוגי',
    emoji: '👨‍💻',
  },
  {
    name: 'מיכל אברהם',
    role: 'מנהלת פרויקטים',
    bio: 'דואגת שהכל יגיע בזמן ובתקציב',
    emoji: '👩‍💼',
  },
];