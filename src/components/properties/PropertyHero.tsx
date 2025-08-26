import Badge from '@/components/ui/Badge';
import { STATISTICS } from '@/lib/constants';
import { Award, CheckCircle, Clock, TrendingUp, Trophy, Users } from 'lucide-react';

const PropertyHero = () => {
  const stats = [
    {
      icon: Trophy,
      number: STATISTICS.propertiesSold,
      label: 'נכסים נמכרו',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Users,
      number: STATISTICS.satisfiedClients,
      label: 'לקוחות מרוצים',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      number: STATISTICS.avgDaysToSell,
      label: 'ימים בממוצע למכירה',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      number: STATISTICS.yearsExperience,
      label: 'שנות ניסיון',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-primary-100/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <Badge 
            variant="success" 
            size="lg" 
            icon={Trophy}
            className="mb-6 animate-fade-in shadow-lg"
          >
            הסיפורי הצלחה שלנו
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-gold mb-6 animate-slide-up">
            נכסים שמכרנו בהצלחה
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed animate-slide-up animation-delay-200">
            עשרות משפחות מרוצות שמצאו את הבית המושלם בעזרתנו
            <br />
            <span className="text-primary-600 font-semibold">
              כל נכס מספר סיפור של הצלחה ושביעות רצון מלאה
            </span>
          </p>
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in animation-delay-600">
          <Badge variant="outline" icon={CheckCircle} className="px-4 py-2 bg-white/80 backdrop-blur-sm">
            מכירה במחיר הטוב ביותר
          </Badge>
          <Badge variant="outline" icon={TrendingUp} className="px-4 py-2 bg-white/80 backdrop-blur-sm">
            שיווק מקצועי ויעיל
          </Badge>
          <Badge variant="outline" icon={Award} className="px-4 py-2 bg-white/80 backdrop-blur-sm">
            ליווי צמוד עד לסיום העסקה
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;