// File: src/components/about/AboutHero.tsx

import Badge from '@/components/ui/Badge';
import Stat from '@/components/ui/Stat';
import { getCombinedStats } from '@/data/agents';
import { Award, Clock, Home, Users } from 'lucide-react';

const AboutHero = () => {
  const stats = getCombinedStats();

  const statsData = [
    {
      icon: Home,
      value: stats.totalProperties.toString(),
      suffix: '+',
      label: 'נכסים נמכרו',
    },
    {
      icon: Users,
      value: Math.round(stats.avgSatisfaction).toString(),
      suffix: '%',
      label: 'שביעות רצון',
    },
    {
      icon: Clock,
      value: stats.avgDaysToSell.toString(),
      label: 'ימים למכירה',
    },
    {
      icon: Award,
      value: stats.totalYearsExperience.toString(),
      suffix: '+',
      label: 'שנות ניסיון',
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-black py-20 overflow-hidden">
      {/* Animated Gold Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="primary" 
            size="lg" 
            icon={Users}
            className="mb-6 animate-fade-in bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30"
          >
            הצוות שלנו
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            צוות שפס נדל{'"'}ן
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up animation-delay-200">
            צוות מתווכים מקצועי ומנוסה עם מעל 18 שנות ניסיון
            <br />
            בשוק הנדל{'"'}ן בחיפה והצפון
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-400">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl shadow-dark p-6 hover:shadow-gold hover:border-[#D4AF37]/40 transition-all duration-300">
                <Stat
                  {...stat}
                  variant="default"
                  size="md"
                  className="text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;