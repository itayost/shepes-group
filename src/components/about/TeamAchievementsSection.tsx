'use client';

import { getCombinedStats } from '@/data/agents';
import { useEffect, useRef, useState } from 'react';

interface Achievement {
  number: number;
  suffix: string;
  label: string;
  icon: string;
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
      icon: '🏡'
    },
    {
      number: Math.round(stats.avgSatisfaction),
      suffix: '%',
      label: 'שביעות רצון לקוחות',
      icon: '😊'
    },
    {
      number: stats.avgDaysToSell,
      suffix: '',
      label: 'ימים בממוצע למכירה',
      icon: '⏱️'
    },
    {
      number: stats.totalYearsExperience,
      suffix: '+',
      label: 'שנות ניסיון משותפות',
      icon: '📅'
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
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <div className="mb-2">
                <CountUp end={achievement.number} suffix={achievement.suffix} />
              </div>
              <p className="text-lg opacity-90">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* פרסים והכרות משותפים */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            פרסים והכרות
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold mb-2">מתווכת השנה</h4>
                <p className="text-sm opacity-90">גלית - 2021</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold mb-2">מומחה השקעות</h4>
                <p className="text-sm opacity-90">חיים - 2020</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-bold mb-2">5 כוכבים בגוגל</h4>
                <p className="text-sm opacity-90">מעל 150 ביקורות</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">מצוינות בשירות</h4>
                <p className="text-sm opacity-90">פרס משותף 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAchievementsSection;