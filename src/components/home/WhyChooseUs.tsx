import { getCombinedStats } from '@/data/agents';
import { WHY_CHOOSE_US } from '@/lib/constants';

const WhyChooseUs = () => {
  const stats = getCombinedStats();
  
  return (
    <section className="py-16 section-luxury">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">למה לבחור בנו?</h2>
          <p className="text-xl text-text-secondary">
            צוות שפס נדל"ן - השותפים שלכם לדרך
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-5xl mb-4 group-hover:animate-shimmer inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* סטטיסטיקות נוספות עם סגנון יוקרתי */}
        <div className="mt-16 bg-gradient-gold text-white rounded-lg shadow-luxury p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-white animate-fade-in">{stats.totalProperties}+</div>
              <div className="text-white/90">נכסים נמכרו</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>{Math.round(stats.avgSatisfaction)}%</div>
              <div className="text-white/90">לקוחות מרוצים</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>{stats.avgDaysToSell}</div>
              <div className="text-white/90">ימים בממוצע למכירה</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white animate-fade-in" style={{ animationDelay: '0.6s' }}>{stats.totalYearsExperience}+</div>
              <div className="text-white/90">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;