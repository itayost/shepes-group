import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { getAboutPageTestimonials } from '@/data/testimonials';
import { Home, MapPin, Quote, Star } from 'lucide-react';

const AboutTestimonials = () => {
  const testimonials = getAboutPageTestimonials();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" icon={Star} className="mb-4">
            המלצות לקוחות
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מה הלקוחות אומרים עלינו
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="elevated" hover className="relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 text-center mb-6 italic relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Avatar 
                    size="md"
                    fallback={testimonial.name[0]}
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.type}</p>
                  </div>
                </div>

                {/* Agent Badge */}
                <div className="text-center mb-4">
                  <Badge variant="outline" size="sm">
                    עבדו עם: {testimonial.agent}
                  </Badge>
                </div>

                {/* Property Details */}
                {testimonial.propertyType && testimonial.neighborhood && (
                  <div className="pt-4 border-t border-gray-100 flex justify-center gap-2">
                    <Badge variant="default" size="xs" icon={Home}>
                      {testimonial.propertyType}
                    </Badge>
                    <Badge variant="default" size="xs" icon={MapPin}>
                      {testimonial.neighborhood}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;