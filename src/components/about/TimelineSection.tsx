const timelineEvents = [
  {
    year: '2006',
    title: 'גלית מתחילה את דרכה',
    description: 'גלית מתחילה כסוכנת נדל"ן בחברת תיווך מובילה בחיפה',
    agent: 'גלית'
  },
  {
    year: '2009',
    title: 'חיים נכנס לתחום',
    description: 'חיים מתחיל את דרכו כיועץ השקעות נדל"ן',
    agent: 'חיים'
  },
  {
    year: '2012',
    title: 'רישיונות תיווך',
    description: 'גלית וחיים מקבלים רישיונות תיווך רשמיים',
    agent: 'שניהם'
  },
  {
    year: '2015',
    title: 'הקמת שפס נדל"ן',
    description: 'גלית וחיים מקימים יחד את משרד שפס נדל"ן',
    agent: 'שניהם'
  },
  {
    year: '2020',
    title: 'הרחבה ודיגיטציה',
    description: 'השקת שירותים דיגיטליים מתקדמים וסיורים וירטואליים',
    agent: 'שניהם'
  },
  {
    year: '2024',
    title: 'מובילים את השוק',
    description: 'מעל 150 עסקאות מוצלחות ומאות לקוחות מרוצים',
    agent: 'שניהם'
  }
];

const TimelineSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          הסיפור שלנו
        </h2>
        <p className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          מסע משותף של שני מתווכים מקצועיים שהפכו לצוות מוביל בשוק הנדל"ן בחיפה
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* קו אנכי מרכזי */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gray-300" />
          
          {/* אירועים */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* תוכן */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5">
                    <span className="text-primary-600 font-bold text-lg">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary mb-2">
                      {event.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      event.agent === 'גלית' ? 'bg-accent-50 text-accent-700' :
                      event.agent === 'חיים' ? 'bg-primary-50 text-primary-700' :
                      'bg-gradient-gold text-white'
                    }`}>
                      {event.agent}
                    </span>
                  </div>
                </div>
                
                {/* נקודה מרכזית */}
                <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-gold" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;