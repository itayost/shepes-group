export interface Testimonial {
  id: number;
  name: string;
  type: string; // סוג העסקה
  content: string;
  rating: number;
  agent: 'גלית' | 'חיים' | 'גלית וחיים';
  featured?: boolean; // האם להציג בדף הבית
  propertyType?: string; // סוג הנכס
  neighborhood?: string; // שכונה
  date?: string; // תאריך
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'משפחת כהן',
    type: 'מכרו דירה באחוזה',
    content: 'תודה רבה לגלית על הליווי המקצועי והאישי. הצליחה למכור את הדירה שלנו תוך חודש במחיר מעולה. ממליצים בחום!',
    rating: 5,
    agent: 'גלית',
    featured: true,
    propertyType: 'דירת 4 חדרים',
    neighborhood: 'אחוזה',
    date: '2024-11'
  },
  {
    id: 2,
    name: 'דוד ושרה לוי',
    type: 'קנו בית בדניה',
    content: 'חיים היה מדהים! הידע שלו בשוק וביכולת המשא ומתן עזרו לנו לקנות את בית החלומות במחיר מצוין.',
    rating: 5,
    agent: 'חיים',
    featured: true,
    propertyType: 'בית פרטי',
    neighborhood: 'דניה',
    date: '2024-10'
  },
  {
    id: 3,
    name: 'יוסי ברק',
    type: 'השכיר דירה בכרמל',
    content: 'שירות מעולה משני המתווכים! גלית מצאה לנו שוכרים איכותיים תוך שבוע. הכנת החוזה והליווי היו מקצועיים ביותר.',
    rating: 5,
    agent: 'גלית וחיים',
    featured: true,
    propertyType: 'דירת 3 חדרים',
    neighborhood: 'כרמל מרכזי',
    date: '2024-09'
  },
  {
    id: 4,
    name: 'משפחת גולן',
    type: 'מכרו וקנו דירה',
    content: 'ליווי מושלם משני הצדדים - חיים עזר לנו למכור את הדירה הישנה וגלית מצאה לנו את הבית החדש. צוות מנצח!',
    rating: 5,
    agent: 'גלית וחיים',
    featured: true,
    propertyType: 'דופלקס',
    neighborhood: 'נווה שאנן',
    date: '2024-08'
  },
  {
    id: 5,
    name: 'משפחת אברהם',
    type: 'קנו דירה ראשונה',
    content: 'גלית וחיים היו מדהימים! המקצועיות והיחס האישי הפכו את תהליך הקנייה לחוויה נעימה. תודה על הסבלנות והליווי.',
    rating: 5,
    agent: 'גלית וחיים',
    featured: false,
    propertyType: 'דירת 3.5 חדרים',
    neighborhood: 'קרית אליעזר',
    date: '2024-07'
  },
  {
    id: 6,
    name: 'רונית ודני כהן',
    type: 'מכרו פנטהאוז',
    content: 'גלית ליוותה אותנו במכירת הפנטהאוז שלנו. מקצועית, חמה ותמיד זמינה. השיגה לנו מחיר מעל הציפיות!',
    rating: 5,
    agent: 'גלית',
    featured: false,
    propertyType: 'פנטהאוז',
    neighborhood: 'כרמל צרפתי',
    date: '2024-06'
  },
  {
    id: 7,
    name: 'יוסי לוי - משקיע',
    type: 'השקעה בנדל"ן',
    content: 'חיים הוא מומחה אמיתי בהשקעות נדל"ן. הידע והניסיון שלו עזרו לי למצוא עסקאות מצוינות עם תשואה גבוהה.',
    rating: 5,
    agent: 'חיים',
    featured: false,
    propertyType: 'דירה להשקעה',
    neighborhood: 'הדר',
    date: '2024-05'
  },
  {
    id: 8,
    name: 'משפחת שמעון',
    type: 'מכרו בית',
    content: 'תודה לחיים על הליווי המקצועי במכירת הבית שלנו. הצליח למכור תוך 3 שבועות במחיר שרצינו. מומלץ בחום!',
    rating: 5,
    agent: 'חיים',
    featured: false,
    propertyType: 'בית דו משפחתי',
    neighborhood: 'רמות רמז',
    date: '2024-04'
  },
  {
    id: 9,
    name: 'עו"ד מיכל ברק',
    type: 'רכשה משרד',
    content: 'חיים עזר לי למצוא משרד מושלם למשרד עורכי הדין שלי. מיקום מעולה ומחיר הוגן. מקצוען אמיתי!',
    rating: 5,
    agent: 'חיים',
    featured: false,
    propertyType: 'נכס מסחרי',
    neighborhood: 'מרכז הכרמל',
    date: '2024-03'
  },
  {
    id: 10,
    name: 'משפחת דוידוב',
    type: 'קנו דירת גן',
    content: 'גלית מצאה לנו את דירת הגן המושלמת! הסבלנות והמקצועיות שלה היו יוצאות מן הכלל. ממליצים בחום!',
    rating: 5,
    agent: 'גלית',
    featured: false,
    propertyType: 'דירת גן',
    neighborhood: 'דניה',
    date: '2024-02'
  }
];

// פונקציות עזר
export const getFeaturedTestimonials = () => {
  return testimonials.filter(t => t.featured);
};

export const getTestimonialsByAgent = (agentName: string) => {
  return testimonials.filter(t => t.agent.includes(agentName));
};

export const getRecentTestimonials = (limit: number = 5) => {
  return [...testimonials]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, limit);
};

// המלצות לדפים ספציפיים
export const getHomePageTestimonials = () => {
  return getFeaturedTestimonials().slice(0, 4);
};

export const getAboutPageTestimonials = () => {
  // מחזיר 3 המלצות מגוונות - אחת לכל מתווך ואחת משותפת
  return [
    testimonials.find(t => t.agent === 'גלית' && t.featured),
    testimonials.find(t => t.agent === 'חיים' && t.featured),
    testimonials.find(t => t.agent === 'גלית וחיים' && t.featured)
  ].filter(Boolean);
};