// File: src/components/properties/PropertyHero.tsx

import Badge from '@/components/ui/Badge';
import { STATISTICS } from '@/lib/constants';
import { Award, CheckCircle, Clock, TrendingUp, Trophy, Users } from 'lucide-react';

const PropertyHero = () => {
  const stats = [
    {
      icon: Trophy,
      number: STATISTICS.propertiesSold,
      label: 'נכסים נמכרו',
      color: 'text-[#FFD700]',
      bgColor: 'bg-[#D4AF37]/20'
    },
    {
      icon: Users,
      number: STATISTICS.satisfiedClients,
      label: 'לקוחות מרוצים',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20'
    },
    {
      icon: Clock,
      number: STATISTICS.avgDaysToSell,
      label: 'ימים בממוצע למכירה',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20'
    },
    {
      icon: Award,
      number: STATISTICS.yearsExperience,
      label: 'שנות ניסיון',
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/20'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-black py-20 overflow-hidden">
      {/* Animated Gold Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#D4AF37]/5 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <Badge 
            variant="success" 
            size="lg" 
            icon={Trophy}
            className="mb-6 animate-fade-in shadow-gold bg-green-900/20 text-green-400 border-green-400/30"
          >
            סיפורי ההצלחה שלנו
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            נכסים שמכרנו בהצלחה
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            עשרות משפחות מרוצות שמצאו את הבית המושלם בעזרתנו
            <br />
            <span className="text-[#D4AF37] font-semibold">
              כל נכס מספר סיפור של הצלחה ושביעות רצון מלאה
            </span>
          </p>
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in animation-delay-600">
          <Badge variant="outline" icon={CheckCircle} className="px-4 py-2 bg-black/50 backdrop-blur-sm border-[#D4AF37]/50 text-[#D4AF37]">
            מכירה במחיר הטוב ביותר
          </Badge>
          <Badge variant="outline" icon={TrendingUp} className="px-4 py-2 bg-black/50 backdrop-blur-sm border-[#D4AF37]/50 text-[#D4AF37]">
            שיווק מקצועי ויעיל
          </Badge>
          <Badge variant="outline" icon={Award} className="px-4 py-2 bg-black/50 backdrop-blur-sm border-[#D4AF37]/50 text-[#D4AF37]">
            ליווי צמוד עד לסיום העסקה
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;