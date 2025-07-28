export interface Agent {
  id: string;
  name: string;
  title: string;
  license: string;
  phone: string;
  email: string;
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
    title: 'מתווכת בכירה ומומחית נדל"ן יוקרה',
    license: 'רישיון מתווך: 12345',
    phone: '054-1234567',
    email: 'galit@shepes-realestate.co.il',
    image: '/images/agents/galit-shepes.jpg',
    yearsOfExperience: 18,
    specialties: [
      'נכסי יוקרה',
      'פנטהאוזים',
      'דירות משפחתיות',
      'ליווי משפחות'
    ],
    education: [
      'בוגרת לימודי נדל"ן, המכללה למינהל',
      'הסמכה בשמאות מקרקעין',
      'קורס מתקדם בשיווק נדל"ן דיגיטלי'
    ],
    bio: [
      'אני גלית שפס, מתווכת נדל"ן בכירה עם למעלה מ-18 שנות ניסיון בשוק הנדל"ן בחיפה והצפון. התחלתי את דרכי בתחום מתוך אהבה אמיתית לאנשים ורצון לעזור למשפחות למצוא את הבית המושלם.',
      'לאורך השנים התמחיתי בנכסי יוקרה ודירות משפחתיות באזורי הכרמל, אחוזה ודניה. אני מאמינה שכל לקוח הוא ייחודי וזקוק לליווי אישי ומותאם.',
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
        year: '2006',
        title: 'תחילת הדרך',
        description: 'התחלתי את דרכי כסוכנת נדל"ן בחברת תיווך מובילה'
      },
      {
        year: '2009',
        title: 'קבלת רישיון תיווך',
        description: 'סיימתי בהצטיינות את לימודי התיווך וקיבלתי רישיון'
      },
      {
        year: '2015',
        title: 'שותפות עם חיים',
        description: 'הקמנו יחד את משרד שפס נדל"ן'
      },
      {
        year: '2021',
        title: 'מתווכת השנה',
        description: 'זכיתי בתואר מתווכת השנה מטעם לשכת המתווכים'
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
        title: 'ליווי נשים',
        description: 'מומחית בליווי נשים בתהליכי נדל"ן',
        percentage: 100
      }
    ]
  },
  {
    id: 'haim-shepes',
    name: 'חיים שפס',
    title: 'מתווך בכיר ומומחה השקעות נדל"ן',
    license: 'רישיון מתווך: 54321',
    phone: '054-7654321',
    email: 'haim@shepes-realestate.co.il',
    image: '/images/agents/haim-shepes.jpg',
    yearsOfExperience: 15,
    specialties: [
      'השקעות נדל"ן',
      'נכסים מסחריים',
      'פרויקטים חדשים',
      'ייעוץ למשקיעים'
    ],
    education: [
      'בוגר כלכלה וניהול, אוניברסיטת חיפה',
      'לימודי נדל"ן מתקדמים',
      'הסמכה בייעוץ השקעות נדל"ן'
    ],
    bio: [
      'אני חיים שפס, מתווך נדל"ן בכיר עם 15 שנות ניסיון והתמחות בהשקעות נדל"ן ונכסים מסחריים. הרקע שלי בכלכלה וניהול מאפשר לי לתת ללקוחות ניתוח מעמיק של השוק.',
      'אני מתמחה באיתור הזדמנויות השקעה, ליווי משקיעים ועסקאות מורכבות. הניסיון שלי כולל מכירת נכסים מסחריים, משרדים, ומגרשים לבנייה.',
      'אני מאמין בגישה אנליטית ומקצועית, תוך שמירה על יושרה ושקיפות מלאה. המטרה שלי היא להשיג את התוצאה הטובה ביותר עבור כל לקוח.'
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
        year: '2009',
        title: 'תחילת הקריירה',
        description: 'התחלתי כיועץ השקעות נדל"ן'
      },
      {
        year: '2012',
        title: 'רישיון תיווך',
        description: 'קבלת רישיון תיווך והתמחות בנכסים מסחריים'
      },
      {
        year: '2015',
        title: 'הקמת שפס נדל"ן',
        description: 'שותפות עם גלית והקמת המשרד'
      },
      {
        year: '2020',
        title: 'פרס המשקיע',
        description: 'זכייה בפרס המשקיע המצטיין'
      }
    ],
    expertise: [
      {
        title: 'השקעות נדל"ן',
        description: 'ייעוץ וליווי משקיעים בעסקאות רווחיות',
        percentage: 96
      },
      {
        title: 'נכסים מסחריים',
        description: 'מומחה במכירת משרדים וחנויות',
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