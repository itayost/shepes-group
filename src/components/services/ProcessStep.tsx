interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300 group-hover:shadow-gold">
        <span className="text-2xl font-bold">{step}</span>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
};

export default ProcessStep;