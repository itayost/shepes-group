import { Card } from '@/components/ui/Card';
import Stat from '@/components/ui/Stat';
import { STATISTICS } from '@/lib/constants';
import { Award, Clock, Home, Users } from 'lucide-react';

const PropertyStats = () => {
  const stats = [
    {
      icon: Home,
      value: STATISTICS.propertiesSold.replace('+', ''),
      suffix: '+',
      label: 'נכסים נמכרו',
      trend: { value: 15, isPositive: true }
    },
    {
      icon: Users,
      value: STATISTICS.satisfiedClients.replace('%', ''),
      suffix: '%',
      label: 'לקוחות מרוצים',
      trend: { value: 2, isPositive: true }
    },
    {
      icon: Clock,
      value: STATISTICS.avgDaysToSell,
      label: 'ימים בממוצע למכירה',
      trend: { value: -3, isPositive: true }
    },
    {
      icon: Award,
      value: STATISTICS.yearsExperience.replace('+', ''),
      suffix: '+',
      label: 'שנות ניסיון'
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container">
        <Card variant="default" className="shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <Stat
                key={index}
                {...stat}
                variant="default"
                size="lg"
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PropertyStats;