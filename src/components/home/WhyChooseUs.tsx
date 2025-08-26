import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { Handshake, Sparkles, TrendingUp, Trophy } from 'lucide-react';

const iconMap: Record<string, typeof Trophy> = {
  'Trophy': Trophy,
  'Handshake': Handshake,
  'TrendingUp': TrendingUp,
  'Sparkles': Sparkles,
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            למה אנחנו?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            למה לבחור בשפס נדל״ן?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ניסיון, מקצועיות ומחויבות אישית לכל לקוח
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            
            return (
              <Card 
                key={index}
                variant="default"
                hover
                className="text-center group"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;