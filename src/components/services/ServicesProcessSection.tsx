import { processSteps } from '@/data/services';

const ServicesProcessSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">תהליך העבודה שלנו</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            ארבעה שלבים פשוטים לדרך להצלחה בנדל"ן
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* קו מחבר */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 -z-10"></div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-text-secondary text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;