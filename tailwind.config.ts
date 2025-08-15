import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // צבע ראשי - זהב יוקרתי
        primary: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fff3c4',
          300: '#ffe88c',
          400: '#ffd84c',
          500: '#d4af37', // זהב ראשי - כמו באתר
          600: '#c9a961', // זהב כהה יותר
          700: '#b8860b', // זהב ברונזה
          800: '#996515',
          900: '#7a4f11',
          950: '#5c3a0d',
        },
        // צבע משני - שחור יוקרתי
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          850: '#282828',
          900: '#1a1a1a', // שחור רך
          950: '#0a0a0a', // שחור עמוק
          999: '#000000', // שחור מוחלט
        },
        // צבעי רקע
        background: {
          primary: '#000000',      // רקע שחור ראשי
          secondary: '#0a0a0a',    // רקע שחור משני
          tertiary: '#1a1a1a',     // רקע שחור שלישוני
          light: '#ffffff',        // רקע לבן לסקשנים בהירים
          overlay: 'rgba(0,0,0,0.7)', // שכבת כיסוי שחורה
        },
        // צבעי טקסט
        text: {
          primary: '#ffffff',      // טקסט לבן על רקע כהה
          secondary: '#d4d4d4',    // טקסט אפור בהיר
          muted: '#a4a4a4',       // טקסט מושתק
          dark: '#0a0a0a',        // טקסט שחור על רקע בהיר
          gold: '#d4af37',        // טקסט זהב
        },
        // צבע הדגשה - זהב מטאלי
        accent: {
          DEFAULT: '#d4af37',
          hover: '#c9a961',
          light: '#ffe88c',
          dark: '#b8860b',
        },
        // צבעי תמיכה
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
      },
      fontFamily: {
        // פונטים בעברית
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
        luxury: ['Playfair Display', 'serif'], // פונט יוקרתי אופציונלי
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        // גרדיאנטים יוקרתיים
        'gradient-luxury': 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #c9a961 50%, #b8860b 100%)',
        'gradient-gold-radial': 'radial-gradient(circle, #d4af37 0%, #c9a961 50%, transparent 70%)',
        'gradient-dark-radial': 'radial-gradient(circle at top, #1a1a1a 0%, #000000 100%)',
        // Overlay gradients
        'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
        'gradient-overlay-gold': 'linear-gradient(180deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 100%)',
      },
      boxShadow: {
        // צללים יוקרתיים
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 10px 40px -3px rgba(212, 175, 55, 0.4)',
        'gold-xl': '0 20px 60px -4px rgba(212, 175, 55, 0.5)',
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'dark': '0 10px 30px rgba(0, 0, 0, 0.9)',
        'inner-gold': 'inset 0 2px 10px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
        'glow-gold': 'glowGold 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        glowGold: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config;