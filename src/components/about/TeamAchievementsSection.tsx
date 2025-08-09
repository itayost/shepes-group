'use client';

import { getCombinedStats } from '@/data/agents';
import { Briefcase, Calendar, Clock, Home, Smile, Star, Target, Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Achievement {
  number: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref} className="text-5xl font-bold text-primary-600">
      {count}{suffix}
    </span>
  );
};

const TeamAchievementsSection = () => {
  const stats = getCombinedStats();
  
  const achievements: Achievement[] = [
    {
      number: stats.totalProperties,
      suffix: '+',
      label: 'עסקאות הושלמו בהצלחה',
      icon: Home
    },
    {
      number: Math.round(stats.avgSatisfaction),
      suffix: '%',
      label: 'שביעות רצון לקוחות',
      icon: Smile
    },
    {
      number: stats.avgDaysToSell,
      suffix: '',
      label: 'ימים בממוצע למכירה',
      icon: Clock
    },
    {
      number: stats.totalYearsExperience,
      suffix: '+',
      label: 'שנות ניסיון משותפות',
      icon: Calendar
    }
  ];

  const awards = [
    {
      icon: Trophy,
      title: 'מתווכת השנה',
      description: 'גלית - 2021'
    },
    {
      icon: Briefcase,
      title: 'מומחה השקעות',
      description: 'חיים - 2020'
    },
    {
      icon: Star,
      title: '5 כוכבים בגוגל',
      description: 'מעל 150 ביקורות'
    },
    {
      icon: Target,
      title: 'מצוינות בשירות',
      description: 'פרס משותף 2023'
    }
  ];

  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ההישגים שלנו במספרים
        </h2>
        <p className="text-xl text-center mb-12 opacity-90 max-w-2xl mx-auto">
          הצלחות משותפות שמוכיחות את המחויבות שלנו ללקוחות
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12" />
                </div>
                <div className="mb-2">
                  <CountUp end={achievement.number} suffix={achievement.suffix} />
                </div>
                <p className="text-lg opacity-90">{achievement.label}</p>
              </div>
            );
          })}
        </div>

        {/* פרסים והכרות משותפים */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            פרסים והכרות
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold mb-2">{award.title}</h4>
                    <p className="text-sm opacity-90">{award.description}</p>
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

export default TeamAchievementsSection;