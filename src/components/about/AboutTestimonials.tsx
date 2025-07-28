import { getAboutPageTestimonials } from '@/data/testimonials';

const AboutTestimonials = () => {
  const testimonials = getAboutPageTestimonials();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          מה הלקוחות אומרים
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* כוכבי דירוג */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">★</span>
                ))}
              </div>
              
              {/* תוכן ההמלצה */}
              <blockquote className="text-gray-700 text-center mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* פרטי הלקוח */}
              <div className="text-center">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.type}</p>
                <p className="text-xs text-primary-600 mt-1">עבדו עם: {testimonial.agent}</p>
              </div>
              
              {/* תגיות נוספות אם קיימות */}
              {testimonial.propertyType && testimonial.neighborhood && (
                <div className="mt-4 pt-4 border-t text-center">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 mr-2">
                    {testimonial.propertyType}
                  </span>
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
                    {testimonial.neighborhood}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;