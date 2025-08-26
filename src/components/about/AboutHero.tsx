import Badge from '@/components/ui/Badge';
import { getCombinedStats } from '@/data/agents';
import { Award, Clock, Home, Sparkles, Users } from 'lucide-react';

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
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        {/* Gold gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-primary-500/10 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="solid" 
            size="lg" 
            icon={Users}
            className="mb-6 animate-fade-in"
            glow
          >
            הצוות שלנו
          </Badge>

          {/* Title with Gold Gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 bg-clip-text text-transparent">
              צוות שפס גרופ
            </span>
          </h1>

          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-4 my-8 animate-fade-in animation-delay-200">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-primary-500" />
            <Sparkles className="w-6 h-6 text-primary-500" />
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-primary-500" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-300 mb-16 leading-relaxed animate-slide-up animation-delay-200">
            צוות מתווכים מקצועי ומנוסה עם מעל 
            <span className="text-primary-500 font-bold"> 18 שנות ניסיון</span>
            <br />
            בשוק הנדל"ן בחיפה והצפון
          </p>

          {/* Stats Grid - Luxury Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-400">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-dark-950 to-dark-900 border border-dark-800 rounded-2xl p-6 transition-all duration-500 hover:border-primary-500/50 hover:shadow-gold-lg hover:-translate-y-2">
                    {/* Gold accent line at top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
                    
                    {/* Icon with gold glow */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:bg-primary-500/30 transition-all duration-300" />
                      <div className="relative w-12 h-12 mx-auto bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center border border-primary-500/30">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                    </div>

                    {/* Value with gold gradient */}
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-xs text-dark-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;