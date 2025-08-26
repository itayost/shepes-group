import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { ArrowLeft, Award, Clock, MessageCircle, Phone, Star } from 'lucide-react';
import Link from 'next/link';

const ServicesCTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-t from-black via-dark-950 to-black relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        {/* Gold Particles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
        
        {/* Animated Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Award Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Badge variant="solid" size="lg" className="px-8 py-4 shadow-gold-xl" glow>
              <Award className="w-6 h-6" />
              <span className="text-lg font-bold">השירות המוביל בחיפה והצפון</span>
              <Award className="w-6 h-6" />
            </Badge>
          </div>
          
          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            <span className="block text-white mb-4">מוכנים להתחיל</span>
            <span className="text-gradient-gold">בדרך להצלחה?</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl text-dark-300 mb-12 animate-slide-up animation-delay-200">
            הצטרפו למאות לקוחות מרוצים שבחרו בשירות המקצועי ביותר
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in animation-delay-400">
            <div className="bg-dark-950/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <Star className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-dark-400">שביעות רצון</div>
            </div>
            <div className="bg-dark-950/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-dark-400">זמינות מלאה</div>
            </div>
            <div className="bg-dark-950/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <Award className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">18+</div>
              <div className="text-sm text-dark-400">שנות ניסיון</div>
            </div>
            <div className="bg-dark-950/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20">
              <MessageCircle className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-dark-400">המלצות</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12 animate-slide-up animation-delay-600">
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Button 
                size="xl" 
                variant="gradient"
                icon={Phone}
                className="min-w-[320px] shadow-gold-2xl"
                glow
              >
                <span className="text-xl font-bold">קבלו ייעוץ חינם עכשיו</span>
              </Button>
            </a>
            
            <Link href="/contact">
              <Button 
                size="xl" 
                variant="secondary"
                icon={ArrowLeft}
                className="min-w-[320px]"
              >
                <span className="text-xl font-bold">השאירו פרטים</span>
              </Button>
            </Link>
          </div>
          
          {/* Trust Text */}
          <p className="text-lg text-dark-400 animate-fade-in animation-delay-800">
            ✨ ללא התחייבות • ייעוץ חינם • מענה תוך 24 שעות ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;