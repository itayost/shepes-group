export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  process: string[];
}

export const services: Service[] = [
  {
    id: 'selling',
    title: 'מכירת נכס',
    icon: '🏠',
    description: 'גלית וחיים ישווקו את הנכס שלכם בצורה המקצועית ביותר וישיגו את המחיר הטוב ביותר',
    image: '/images/services/selling.jpg',
    features: [
      {
        title: 'הערכת שווי מקצועית',
        description: 'הערכה מדויקת של שווי הנכס על בסיס ניתוח שוק מקיף'
      },
      {
        title: 'צילום מקצועי',
        description: 'צילום מקצועי של הנכס כולל צילומי רחפן ותמונות HDR'
      },
      {
        title: 'שיווק רב-ערוצי',
        description: 'פרסום ברשתות החברתיות, פורטלים מובילים ובקרב מאגר הלקוחות שלנו'
      },
      {
        title: 'ליווי משפטי מלא',
        description: 'ליווי צמוד של עורך דין מומחה בכל שלבי העסקה'
      },
      {
        title: 'משא ומתן מקצועי',
        description: 'ניהול משא ומתן מיומן להשגת התנאים הטובים ביותר'
      },
      {
        title: 'ליווי עד סיום העסקה',
        description: 'ליווי מלא עד למסירת המפתחות והעברת הבעלות'
      }
    ],
    process: [
      'פגישת היכרות והערכת הנכס',
      'הכנת תיק נכס מלא כולל צילומים',
      'פרסום ושיווק הנכס',
      'תיאום וליווי סיורים',
      'ניהול משא ומתן',
      'ליווי משפטי וסיום עסקה'
    ]
  },
  {
    id: 'buying',
    title: 'קניית נכס',
    icon: '🔑',
    description: 'נמצא עבורכם את הבית המושלם התואם לצרכים ולתקציב שלכם',
    image: '/images/services/buying.jpg',
    features: [
      {
        title: 'איתור נכסים מתאימים',
        description: 'חיפוש ממוקד של נכסים העונים על כל הדרישות שלכם'
      },
      {
        title: 'גישה לנכסים לפני השוק',
        description: 'גישה למאגר נכסים אקסקלוסיבי טרם פרסומם הפומבי'
      },
      {
        title: 'סיורים וליווי אישי',
        description: 'ליווי מקצועי בסיורים עם הסברים מפורטים על כל נכס'
      },
      {
        title: 'בדיקת היסטוריית הנכס',
        description: 'בדיקה יסודית של ההיסטוריה המשפטית והפיזית של הנכס'
      },
      {
        title: 'ייעוץ משכנתאות',
        description: 'הכוונה וליווי בתהליך קבלת המשכנתא הטובה ביותר'
      },
      {
        title: 'ליווי עד קבלת המפתחות',
        description: 'ליווי מלא בכל שלבי הרכישה עד לכניסה לבית החדש'
      }
    ],
    process: [
      'פגישת ייעוץ ואפיון צרכים',
      'חיפוש ואיתור נכסים מתאימים',
      'תיאום וליווי בסיורים',
      'בדיקות נדרשות לנכס',
      'ניהול משא ומתן',
      'ליווי משפטי ומימוני עד סיום'
    ]
  },
  {
    id: 'rental',
    title: 'השכרה',
    icon: '📋',
    description: 'פתרונות השכרה מקיפים למשכירים ולשוכרים',
    image: '/images/services/rental.jpg',
    features: [
      {
        title: 'איתור שוכרים איכותיים',
        description: 'סינון קפדני של שוכרים פוטנציאליים לביטחון מירבי'
      },
      {
        title: 'בדיקת אמינות',
        description: 'בדיקות רקע מקיפות כולל אישורי הכנסה והמלצות'
      },
      {
        title: 'הכנת חוזים מקצועיים',
        description: 'עריכת חוזי שכירות מפורטים המגנים על שני הצדדים'
      },
      {
        title: 'ניהול נכס',
        description: 'שירותי ניהול נכס מלאים למשכירים (אופציונלי)'
      },
      {
        title: 'תיווך מהיר',
        description: 'השכרת הנכס בזמן הקצר ביותר במחיר האופטימלי'
      },
      {
        title: 'ליווי לאורך השכירות',
        description: 'תמיכה וייעוץ לאורך כל תקופת השכירות'
      }
    ],
    process: [
      'הערכת דמי שכירות ראויים',
      'צילום ופרסום הנכס',
      'סינון וראיונות שוכרים',
      'בדיקות אמינות',
      'הכנת חוזה מקצועי',
      'ליווי במסירת הנכס'
    ]
  },
  {
    id: 'valuation',
    title: 'הערכת שווי וייעוץ',
    icon: '📊',
    description: 'הערכת שווי מקצועית וייעוץ מקיף לקבלת החלטות מושכלות',
    image: '/images/services/valuation.jpg',
    features: [
      {
        title: 'הערכת שווי מדויקת',
        description: 'הערכה מקצועית המבוססת על ניתוח שוק מעמיק'
      },
      {
        title: 'ניתוח השוואתי',
        description: 'השוואה לנכסים דומים שנמכרו באזור לאחרונה'
      },
      {
        title: 'ייעוץ השקעה',
        description: 'ייעוץ מקיף לגבי פוטנציאל ההשקעה והתשואה הצפויה'
      },
      {
        title: 'דוחות מפורטים',
        description: 'דוח הערכה מקצועי ומפורט עם כל הנתונים הרלוונטיים'
      },
      {
        title: 'ייעוץ שיפוצים',
        description: 'המלצות לשיפוצים שיעלו את ערך הנכס'
      },
      {
        title: 'ליווי מתמשך',
        description: 'ייעוץ וליווי מתמשך בכל שאלה או התלבטות'
      }
    ],
    process: [
      'סיור מקצועי בנכס',
      'איסוף נתונים וניתוח שוק',
      'הכנת הערכת שווי מפורטת',
      'הצגת הממצאים והמלצות',
      'מענה על שאלות',
      'ליווי בהחלטות עתידיות'
    ]
  }
];

// פונקציות עזר
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// נתונים לתצוגה מקדימה בדף הבית
export const getServicesPreview = () => {
  return services.map(service => ({
    icon: service.icon,
    title: service.title,
    description: service.description.substring(0, 100) + '...',
    link: `/services#${service.id}`
  }));
};

// נתוני תהליך העבודה הכללי
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'פגישת היכרות',
    description: 'נכיר, נבין את הצרכים שלכם ונתאים את השירות המושלם'
  },
  {
    step: '02',
    title: 'תכנון אסטרטגיה',
    description: 'נבנה תוכנית פעולה מותאמת אישית להשגת המטרה'
  },
  {
    step: '03',
    title: 'ביצוע מקצועי',
    description: 'נפעל בשטח עם כל הכלים והניסיון שלנו'
  },
  {
    step: '04',
    title: 'השלמת העסקה',
    description: 'נלווה אתכם עד לחתימה ומסירת המפתחות'
  }
];