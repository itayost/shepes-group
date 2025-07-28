const expertiseAreas = [
  {
    title: 'נכסי יוקרה',
    description: 'מומחה במכירת נכסי יוקרה ופנטהאוזים באזורי הכרמל והאחוזה',
    percentage: 95
  },
  {
    title: 'דירות ראשונות',
    description: 'ליווי זוגות צעירים ומשפחות ברכישת הנכס הראשון',
    percentage: 98
  },
  {
    title: 'השקעות נדל"ן',
    description: 'ייעוץ למשקיעים ואיתור הזדמנויות השקעה משתלמות',
    percentage: 90
  },
  {
    title: 'נכסים מסחריים',
    description: 'מכירה והשכרה של משרדים, חנויות ונכסים מסחריים',
    percentage: 85
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          תחומי ההתמחות שלי
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          לאורך השנים פיתחתי מומחיות עמוקה במגוון תחומים בשוק הנדל"ן
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
                <span className="text-2xl font-bold text-primary-600">
                  {area.percentage}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-l from-primary-600 to-primary-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${area.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* שירותים נוספים */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">שירותים נוספים שאני מציע</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'ייעוץ משכנתאות',
              'הערכות שווי מקצועיות',
              'ליווי משפטי מלא',
              'שיווק דיגיטלי מתקדם',
              'סיורים וירטואליים',
              'ניהול נכסים'
            ].map((service, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;