import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import Progress from '@/components/ui/Progress';
import { processSteps } from '@/data/services';
import { CheckCircle } from 'lucide-react';

const ServicesProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            תהליך העבודה
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ארבעה שלבים פשוטים להצלחה
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            תהליך מובנה ומקצועי שמבטיח תוצאות מיטביות
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <Progress 
            value={100} 
            variant="gradient" 
            size="lg"
            color="primary"
            className="shadow-lg"
          />
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -z-10" />
              )}

              <Card variant="default" hover className="h-full">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-3xl font-bold">{step.step}</span>
                    </div>
                    {index === processSteps.length - 1 && (
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="success" icon={CheckCircle} size="sm">
                          הצלחה!
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;