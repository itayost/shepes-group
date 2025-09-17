export interface Agent {
  id: string;
  name: string;
  title: string;
  license: string;
  phone: string;
  email?: string;
  image: string;
  yearsOfExperience: number;
  specialties: string[];
  education: string[];
  bio: string[];
  achievements: {
    propertiesSold: number;
    satisfactionRate: number;
    avgDaysToSell: number;
    awards?: string[];
  };
  timeline?: {
    year: string;
    title: string;
    description: string;
  }[];
  expertise: {
    title: string;
    description: string;
    percentage: number;
  }[];
}

export const agents: Agent[] = [
  {
    id: 'galit-shepes',
    name: 'גלית שפס',
    title: 'בעלים ומתווכת בכירה',
    license: 'רישיון מתווך: 3174759',
    phone: '055-9979975',
    image: '/images/agents/galit-shepes.jpg',
    yearsOfExperience: 10,
    specialties: [
      'נכסי יוקרה',
      'פנטהאוזים',
      'דירות משפחתיות',
      'ליווי משפחות',
      'קנייה ומכירה'
    ],
    education: [
      'בוגרת לימודי נדל"ן, המכללה למינהל',
      'הסמכה בשמאות מקרקעין',
      'קורס מתקדם בשיווק נדל"ן דיגיטלי'
    ],
    bio: [
      'אני גלית שפס, בעלים של משרד תיווך שפס גרופ בחיפה, מתווכת נדל"ן בכירה עם 10 שנות ניסיון בשוק הנדל"ן בחיפה והצפון.',
      'התחלתי את דרכי בתחום מתוך אהבה אמיתית לאנשים ורצון לעזור למשפחות למצוא את הבית המושלם. אני מתמחה בקנייה ומכירה של נכסים, עם דגש על ליווי אישי ומקצועי.',
      'הגישה שלי משלבת מקצועיות ללא פשרות עם חום אנושי ואמפתיה. אני זמינה ללקוחות שלי 24/7 ומלווה אותם בכל שלב - מהייעוץ הראשוני ועד מסירת המפתחות.'
    ],
    achievements: {
      propertiesSold: 85,
      satisfactionRate: 99,
      avgDaysToSell: 19,
      awards: [
        'מתווכת השנה 2021 - לשכת המתווכים חיפה',
        'פרס מצוינות בשירות 2022',
        'Top Agent 2023 - נכסי יוקרה'
      ]
    },
    timeline: [
      {
        year: '2015',
        title: 'תחילת הדרך',
        description: 'התחלתי את דרכי בתחום הנדל"ן וקיבלתי רישיון תיווך'
      },
      {
        year: '2018',
        title: 'התמחות בנכסי יוקרה',
        description: 'התמחיתי בנכסי יוקרה ודירות משפחתיות באזורי הכרמל'
      },
      {
        year: '2020',
        title: 'שותפות עם חיים',
        description: 'חיים הצטרף לצוות והרחבנו את השירותים'
      },
      {
        year: '2024',
        title: 'הקמת שפס גרופ',
        description: 'הקמת משרד תיווך שפס גרופ - צוות מוביל לשיווק נדל"ן'
      }
    ],
    expertise: [
      {
        title: 'נכסי יוקרה',
        description: 'מומחית במכירת פנטהאוזים ודירות יוקרה בכרמל',
        percentage: 98
      },
      {
        title: 'דירות משפחתיות',
        description: 'ליווי משפחות במציאת הבית המושלם',
        percentage: 95
      },
      {
        title: 'קנייה ומכירה',
        description: 'מומחית בליווי תהליכי קנייה ומכירה',
        percentage: 100
      }
    ]
  },
  {
    id: 'haim-shepes',
    name: 'חיים שפס',
    title: 'מומחה לשיווק נדל״ן',
    license: 'רישיון מתווך: 3227224',
    phone: '053-2765599',
    email: 'shepes@me.com',
    image: '/images/agents/haim-shepes.jpg',
    yearsOfExperience: 5,
    specialties: [
      'שיווק נדל"ן',
      'שיווק מקצועי',
      'השקעות נדל"ן',
      'נכסים מסחריים',
      'פרויקטים חדשים'
    ],
    education: [
      'בוגר כלכלה וניהול, אוניברסיטת חיפה',
      'רקע עשיר בעולם השיווק',
      'לימודי נדל"ן מתקדמים',
      'הסמכה בייעוץ השקעות נדל"ן'
    ],
    bio: [
      'אני חיים שפס, מומחה לשיווק נדל״ן עם 5 שנות ניסיון וידע מקצועי בשיווק. הרקע שלי בעולם השיווק מאפשר לי לשווק נכסים בצורה מקצועית ויעילה.',
      'אני מתמחה בשיווק מקצועי של נדל״ן, עוזר לקנייה ומכירה בצורה מהירה. הניסיון שלי כולל מכירת נכסים מסחריים, משרדים, ומגרשים לבנייה.',
      'אני מאמין בגישה אנליטית ומקצועית, תוך שמירה על יושרה ושקיפות מלאה. המטרה שלי היא להשיג את התוצאה הטובה ביותר עבור כל לקוח בזמן הקצר ביותר.'
    ],
    achievements: {
      propertiesSold: 65,
      satisfactionRate: 97,
      avgDaysToSell: 23,
      awards: [
        'פרס המשקיע המצטיין 2020',
        'מומחה נדל"ן מסחרי 2022'
      ]
    },
    timeline: [
      {
        year: '2020',
        title: 'הצטרפות לתחום',
        description: 'התחלתי את דרכי בתחום הנדל"ן עם התמחות בשיווק'
      },
      {
        year: '2021',
        title: 'רישיון תיווך',
        description: 'קבלת רישיון תיווך והתמחות בנכסים מסחריים'
      },
      {
        year: '2022',
        title: 'התמחות בשיווק',
        description: 'פיתוח שיטות שיווק מתקדמות לנדל"ן'
      },
      {
        year: '2024',
        title: 'הקמת שפס גרופ',
        description: 'שותפות עם גלית והקמת המשרד'
      }
    ],
    expertise: [
      {
        title: 'שיווק נדל"ן',
        description: 'שיווק מקצועי ומהיר של נכסים',
        percentage: 98
      },
      {
        title: 'השקעות נדל"ן',
        description: 'ייעוץ וליווי משקיעים בעסקאות רווחיות',
        percentage: 92
      },
      {
        title: 'פרויקטים חדשים',
        description: 'שיווק דירות בפרויקטים חדשים',
        percentage: 88
      }
    ]
  }
];

// פונקציות עזר
export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getAgentByName = (name: string): Agent | undefined => {
  return agents.find(agent => agent.name === name);
};

// נתונים מצטברים של שני המתווכים
export const getCombinedStats = () => {
  const totalProperties = agents.reduce((sum, agent) => sum + agent.achievements.propertiesSold, 0);
  const avgSatisfaction = agents.reduce((sum, agent) => sum + agent.achievements.satisfactionRate, 0) / agents.length;
  const avgDaysToSell = Math.round(agents.reduce((sum, agent) => sum + agent.achievements.avgDaysToSell, 0) / agents.length);
  const totalYearsExperience = Math.max(...agents.map(agent => agent.yearsOfExperience));

  return {
    totalProperties,
    avgSatisfaction,
    avgDaysToSell,
    totalYearsExperience
  };
};