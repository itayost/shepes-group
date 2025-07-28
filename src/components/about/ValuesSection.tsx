const values = [
  {
    icon: '🤝',
    title: 'אמינות ושקיפות',
    description: 'אנחנו מאמינים בשקיפות מלאה ויושרה בכל עסקה. הלקוחות שלנו יודעים שהם יכולים לסמוך עלינו בעיניים עצומות.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: '💼',
    title: 'מקצועיות ללא פשרות',
    description: 'ידע מעמיק בשוק הנדל"ן המקומי, עדכון מתמיד בחוקים ובתקנות, וניסיון רב בניהול משא ומתן.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: '❤️',
    title: 'ליווי אישי וחם',
    description: 'כל לקוח מקבל יחס אישי ומותאם. אנחנו זמינים 24/7 ומלווים את הלקוחות שלנו בכל שלב של התהליך.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: '🎯',
    title: 'מחויבות לתוצאות',
    description: 'המטרה שלנו היא להשיג את התוצאה הטובה ביותר עבור כל לקוח - בין אם זה המחיר הגבוה ביותר במכירה או העסקה הטובה ביותר בקנייה.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: '🔍',
    title: 'תשומת לב לפרטים',
    description: 'אנחנו בודקים כל פרט, מנתחים כל מסמך ומוודאים שהלקוחות שלנו מקבלים את מלוא המידע לקבלת החלטה מושכלת.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: '🚀',
    title: 'חדשנות וקידמה',
    description: 'משלבים טכנולוגיות מתקדמות כמו סיורים וירטואליים ושיווק דיגיטלי כדי להעניק את השירות הטוב ביותר.',
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          הערכים שמנחים אותנו
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          ששת העקרונות שעומדים בבסיס העבודה שלנו ומבטיחים את הצלחת הלקוחות
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;