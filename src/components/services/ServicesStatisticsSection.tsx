'use client';

import { Award, Clock, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Statistic {
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
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
};

const ServicesStatisticsSection = () => {
  const statistics: Statistic[] = [
    {
      number: 150,
      suffix: '+',
      label: 'עסקאות הושלמו',
      icon: Target
    },
    {
      number: 98,
      suffix: '%',
      label: 'שביעות רצון',
      icon: Award
    },
    {
      number: 250,
      suffix: '+',
      label: 'לקוחות מרוצים',
      icon: Users
    },
    {
      number: 18,
      suffix: '+',
      label: 'שנות ניסיון',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-gradient-luxury text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl transform translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl transform -translate-x-40 translate-y-40"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          המספרים מדברים בעד עצמם
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-primary-400" />
                </div>
                <div className="mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesStatisticsSection;