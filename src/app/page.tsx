import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
<section className="relative section bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-mesh-gradient"></div>
  
  <div className="container relative">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        ברוכים הבאים ל
        <span className="gradient-text"> העתיד</span>
      </h1>
      <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl">
        פתרונות דיגיטליים מתקדמים שמניעים את העסק שלכם קדימה
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="shadow-glow hover:shadow-glow-lg">
          התחילו עכשיו
        </Button>
        <Button size="lg" variant="outline" className="group">
          למידע נוסף
          <span className="mr-2 inline-block transition-transform group-hover:translate-x-1">
            ←
          </span>
        </Button>
      </div>
    </div>
  </div>
  
  {/* Floating shapes (optional) */}
  <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl animate-float"></div>
  <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
</section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            למה לבחור בנו?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
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
            מוכנים להתחיל?
          </h2>
          <p className="mb-8 text-xl">
            צרו איתנו קשר עוד היום ונשמח לעזור לכם
          </p>
          <Button size="lg" variant="secondary">
            צרו קשר
          </Button>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: '🚀',
    title: 'מהירות וביצועים',
    description: 'האתר שלכם יטען במהירות הבזק בזכות הטכנולוגיות המתקדמות ביותר',
  },
  {
    icon: '🎨',
    title: 'עיצוב מותאם אישית',
    description: 'עיצוב ייחודי שמותאם בדיוק לצרכים ולמותג שלכם',
  },
  {
    icon: '📱',
    title: 'תמיכה מלאה במובייל',
    description: 'האתר שלכם ייראה ויעבוד מצוין בכל מכשיר ובכל גודל מסך',
  },
];