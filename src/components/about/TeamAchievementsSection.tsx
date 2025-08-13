'use client';

import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import Stat from '@/components/ui/Stat';
import { getCombinedStats } from '@/data/agents';
import { Briefcase, Calendar, Clock, Home, Star, Target, Trophy, Users } from 'lucide-react';

const TeamAchievementsSection = () => {
  const stats = getCombinedStats();

  const achievements = [
    {
      icon: Home,
      value: stats.totalProperties.toString(),
      suffix: '+',
      label: 'עסקאות הושלמו',
      trend: { value: 25, isPositive: true }
    },
    {
      icon: Users,
      value: Math.round(stats.avgSatisfaction).toString(),
      suffix: '%',
      label: 'שביעות רצון',
      trend: { value: 2, isPositive: true }
    },
    {
      icon: Clock,
      value: stats.avgDaysToSell.toString(),
      label: 'ימים למכירה',
      trend: { value: -5, isPositive: true }
    },
    {
      icon: Calendar,
      value: stats.totalYearsExperience.toString(),
      suffix: '+',
      label: 'שנות ניסיון'
    }
  ];

  const awards = [
    {
      icon: Trophy,
      title: 'מתווכת השנה',
      description: 'גלית - 2021',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      icon: Briefcase,
      title: 'מומחה השקעות',
      description: 'חיים - 2020',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Star,
      title: '5 כוכבים בגוגל',
      description: '150+ ביקורות',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Target,
      title: 'מצוינות בשירות',
      description: 'פרס משותף 2023',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" size="lg" className="mb-4 bg-white/10 text-white border-white/20">
            ההישגים שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            המספרים מדברים בעד עצמם
          </h2>
        </div>

        {/* Stats Grid */}
        <Card variant="default" className="bg-white/10 backdrop-blur-md border-white/20 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6">
                <Stat
                  {...achievement}
                  variant="default"
                  size="lg"
                  className="text-white [&_*]:text-white"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card key={index} variant="default" className="bg-white/90 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-xl ${award.color} mb-3`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {award.description}
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

export default TeamAchievementsSection;