import { WHY_CHOOSE_US } from '@/lib/constants';
import { Handshake, Sparkles, TrendingUp, Trophy } from 'lucide-react';

// Map icon names to Lucide components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Trophy': Trophy,
  'Handshake': Handshake,
  'TrendingUp': TrendingUp,
  'Sparkles': Sparkles,
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">למה לבחור בשפס נדל״ן?</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            ניסיון, מקצועיות ומחויבות אישית לכל לקוח
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            // Get the icon component
            const IconComponent = iconMap[item.icon] || Trophy;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;