import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    year: '2006',
    title: 'ההתחלה',
    description: 'גלית מתחילה את דרכה בתחום הנדל"ן בחיפה',
    agent: 'גלית',
    icon: Calendar
  },
  {
    year: '2009',
    title: 'הצטרפות לצוות',
    description: 'חיים מצטרף לתחום ומתמחה בנכסים מסחריים',
    agent: 'חיים',
    icon: MapPin
  },
  {
    year: '2015',
    title: 'הקמת שפס נדל"ן',
    description: 'פתיחת המשרד המשותף והתחלת שיתוף הפעולה המלא',
    agent: 'גלית וחיים',
    icon: Trophy
  },
  {
    year: '2020',
    title: 'הרחבת השירותים',
    description: 'הוספת שירותי ניהול נכסים והערכות שווי מקצועיות',
    agent: 'גלית וחיים',
    icon: Trophy
  },
  {
    year: '2024',
    title: 'מובילים בחיפה',
    description: 'מעל 150 נכסים נמכרו, 98% שביעות רצון',
    agent: 'גלית וחיים',
    icon: Trophy
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            המסע שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            הסיפור שלנו לאורך השנים
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${isLeft ? 'text-left' : 'text-right'}`}>
                        <Card variant="elevated" hover className="animate-fade-in">
                          <CardContent className="p-6">
                            {/* Year Badge */}
                            <Badge variant="primary" size="lg" className="mb-3">
                              {event.year}
                            </Badge>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-3">
                              {event.description}
                            </p>

                            {/* Agent Badge */}
                            <Badge 
                              variant={
                                event.agent === 'גלית' ? 'warning' :
                                event.agent === 'חיים' ? 'primary' :
                                'success'
                              }
                              size="sm"
                            >
                              {event.agent}
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;