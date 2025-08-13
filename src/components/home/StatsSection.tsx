import Stat from '@/components/ui/Stat';
import { Award, Clock, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '150',
      label: 'נכסים נמכרו',
      suffix: '+',
      trend: { value: 15, isPositive: true }
    },
    {
      icon: Users,
      value: '98',
      label: 'שביעות רצון',
      suffix: '%',
      trend: { value: 2, isPositive: true }
    },
    {
      icon: Clock,
      value: '21',
      label: 'ימים למכירה',
      prefix: '~',
      trend: { value: -5, isPositive: true }
    },
    {
      icon: Award,
      value: '15',
      label: 'שנות ניסיון',
      suffix: '+',
    }
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              {...stat}
              variant="bordered"
              size="md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;