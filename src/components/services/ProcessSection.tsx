import { processSteps } from '@/data/services';
import ProcessStep from './ProcessStep';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          איך זה <span className="gradient-text-gold">עובד?</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {processSteps.map((item, idx) => (
            <ProcessStep 
              key={idx}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;