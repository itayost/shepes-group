const values = [
  {
    icon: '🤝',
    title: 'אמינות ושקיפות',
    description: 'אנחנו מאמינים בשקיפות מלאה ויושרה בכל עסקה. הלקוחות שלנו יודעים שהם יכולים לסמוך עלינו בעיניים עצומות.',
    color: 'bg-primary-50 text-primary-600'
  },
  {
    icon: '💼',
    title: 'מקצועיות ללא פשרות',
    description: 'ידע מעמיק בשוק הנדל"ן המקומי, עדכון מתמיד בחוקים ובתקנות, וניסיון רב בניהול משא ומתן.',
    color: 'bg-secondary-100 text-secondary-800'
  },
  {
    icon: '❤️',
    title: 'ליווי אישי וחם',
    description: 'כל לקוח מקבל יחס אישי ומותאם. אנחנו זמינים 24/7 ומלווים את הלקוחות שלנו בכל שלב של התהליך.',
    color: 'bg-accent-50 text-accent-600'
  },
  {
    icon: '🎯',
    title: 'מחויבות לתוצאות',
    description: 'המטרה שלנו היא להשיג את התוצאה הטובה ביותר עבור כל לקוח - בין אם זה המחיר הגבוה ביותר במכירה או העסקה הטובה ביותר בקנייה.',
    color: 'bg-primary-100 text-primary-700'
  },
  {
    icon: '🔍',
    title: 'תשומת לב לפרטים',
    description: 'אנחנו בודקים כל פרט, מנתחים כל מסמך ומוודאים שהלקוחות שלנו מקבלים את מלוא המידע לקבלת החלטה מושכלת.',
    color: 'bg-accent-100 text-accent-700'
  },
  {
    icon: '🚀',
    title: 'חדשנות וקידמה',
    description: 'משלבים טכנולוגיות מתקדמות כמו סיורים וירטואליים ושיווק דיגיטלי כדי להעניק את השירות הטוב ביותר.',
    color: 'bg-secondary-50 text-secondary-700'
  }
];

const ValuesSection = () => {
  return (
    <section className="py-16 section-luxury">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          הערכים שמנחים אותנו
        </h2>
        <p className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          ששת העקרונות שעומדים בבסיס העבודה שלנו ומבטיחים את הצלחת הלקוחות
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-gold-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:animate-shimmer`}>
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;