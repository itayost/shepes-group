import Badge from '@/components/ui/Badge';
import { CheckCircle, TrendingUp, Trophy } from 'lucide-react';

const PropertyHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="success" 
            size="lg" 
            icon={Trophy}
            className="mb-6 animate-fade-in"
          >
            הסיפורי הצלחה שלנו
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            נכסים שמכרנו בהצלחה
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            עשרות משפחות מרוצות שמצאו את הבית המושלם בעזרתנו
            <br />
            כל נכס מספר סיפור של הצלחה ושביעות רצון מלאה
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in animation-delay-400">
            <Badge variant="outline" icon={CheckCircle} className="px-4 py-2">
              מכירה במחיר הטוב ביותר
            </Badge>
            <Badge variant="outline" icon={TrendingUp} className="px-4 py-2">
              21 ימים בממוצע למכירה
            </Badge>
            <Badge variant="outline" icon={Trophy} className="px-4 py-2">
              98% שביעות רצון
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;