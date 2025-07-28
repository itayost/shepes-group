import { getCombinedStats } from '@/data/agents';
import { WHY_CHOOSE_US } from '@/lib/constants';

const WhyChooseUs = () => {
  const stats = getCombinedStats();
  
  return (
    <section className="py-16 bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-600">
            צוות שפס נדל"ן - השותפים שלכם לדרך
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* סטטיסטיקות נוספות */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.totalProperties}+</div>
              <div className="text-gray-600">נכסים נמכרו</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{Math.round(stats.avgSatisfaction)}%</div>
              <div className="text-gray-600">לקוחות מרוצים</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.avgDaysToSell}</div>
              <div className="text-gray-600">ימים בממוצע למכירה</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.totalYearsExperience}+</div>
              <div className="text-gray-600">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;