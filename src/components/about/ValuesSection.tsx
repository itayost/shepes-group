import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Briefcase, Handshake, Heart, Rocket, Search, Target } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Handshake,
      title: 'אמינות ושקיפות',
      description: 'שקיפות מלאה ויושרה בכל עסקה',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'מקצועיות',
      description: 'ידע מעמיק וניסיון רב בתחום',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: Heart,
      title: 'ליווי אישי',
      description: 'יחס אישי וחם לכל לקוח',
      gradient: 'from-red-400 to-red-600'
    },
    {
      icon: Target,
      title: 'תוצאות',
      description: 'מחויבות להשגת המטרה',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: Search,
      title: 'דיוק',
      description: 'תשומת לב לכל פרט',
      gradient: 'from-amber-400 to-amber-600'
    },
    {
      icon: Rocket,
      title: 'חדשנות',
      description: 'טכנולוגיות מתקדמות',
      gradient: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            הערכים שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            העקרונות שמנחים אותנו
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} variant="elevated" hover className="group">
                <CardContent className="p-8 text-center">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {value.description}
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

export default ValuesSection;