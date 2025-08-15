import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { Award, Handshake, Shield, Sparkles, TrendingUp, Trophy } from 'lucide-react';

const iconMap: Record<string, typeof Trophy> = {
  'Trophy': Trophy,
  'Handshake': Handshake,
  'TrendingUp': TrendingUp,
  'Sparkles': Sparkles,
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" size="lg" className="mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            הבחירה הנכונה
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-white">למה לבחור ב</span>
            <span className="text-gradient-gold">שפס גרופ?</span>
          </h2>
          
          <p className="text-xl text-dark-300 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            ניסיון, מקצועיות ומחויבות אישית לכל לקוח
          </p>
          
          {/* Luxury Divider */}
          <div className="divider-gold mt-8" />
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            
            return (
              <Card 
                key={index}
                variant="glass"
                hover
                className="text-center group animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <CardContent className="p-8 relative">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="inline-flex items-center justify-center w-24 h-24 mx-auto relative">
                      {/* Rotating Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 animate-spin-slow opacity-20 group-hover:opacity-40" />
                      
                      {/* Icon Container */}
                      <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl w-full h-full flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-12 h-12 text-black" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-dark-300 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 pt-20 border-t border-dark-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">150+</div>
              <div className="text-dark-400">נכסים נמכרו</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">98%</div>
              <div className="text-dark-400">שביעות רצון</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">21</div>
              <div className="text-dark-400">ימים בממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">18+</div>
              <div className="text-dark-400">שנות ניסיון</div>
            </div>
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="flex justify-center mt-12">
          <Badge variant="primary" size="lg" className="px-8 py-3">
            <Award className="w-5 h-5" />
            המומחים המובילים בחיפה והצפון
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;