import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

interface ServicesCTAProps {
  hoveredService: string | null;
  servicesData: Array<{
    id: string;
    title: string;
  }>;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({ hoveredService, servicesData }) => {
  return (
    <section className="py-20 bg-gradient-luxury text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          מוכנים להתחיל?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
          {hoveredService 
            ? `בחרתם ב${servicesData.find(s => s.id === hoveredService)?.title} - בחירה מצוינת!` 
            : 'בחרו את השירות המתאים לכם ובואו נתחיל את המסע יחד'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link href="/contact" className="btn-primary shadow-gold-lg animate-glow">
            קבלו ייעוץ חינם
          </Link>
          <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline text-white border-white hover:bg-white hover:text-secondary-900">
            התקשרו עכשיו
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;