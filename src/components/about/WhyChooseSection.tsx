import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Clock, Shield, Users } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: 'צוות משפחתי',
      description: 'עבודה משותפת של בני זוג שמבינים את החשיבות של מציאת הבית המושלם למשפחה',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Shield,
      title: 'אמינות מוכחת',
      description: 'מאות לקוחות מרוצים ועשרות המלצות חמות מעידות על המקצועיות שלנו',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Clock,
      title: 'זמינות 24/7',
      description: 'אנחנו זמינים תמיד - בטלפון, בוואטסאפ ובפגישות אישיות בכל שעה',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            היתרונות שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            למה לבחור בשפס נדל"ן?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} variant="elevated" hover className="text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl ${reason.color} mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
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

export default WhyChooseSection;