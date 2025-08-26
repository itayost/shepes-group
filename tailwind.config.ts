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
        // צבע ראשי - זהב
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // זהב ראשי
          600: '#d97706', // זהב כהה
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03', // זהב כהה מאוד
        },
        // צבע משני - שחור/אפור כהה
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717', // שחור רך
          950: '#0a0a0a', // שחור עמוק
        },
        // צבע הדגשה - זהב מטאלי
        accent: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff3c7',
          300: '#ffe894',
          400: '#ffd84c',
          500: '#d4af37', // זהב מטאלי קלאסי
          600: '#b8860b', // זהב כהה מטאלי
          700: '#996515',
          800: '#7a4f11',
          900: '#5c3a0d',
        },
        // צבעים נוספים
        background: {
          DEFAULT: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          dark: '#0a0a0a',
        },
        text: {
          primary: '#171717',    // שחור רך לטקסט
          secondary: '#525252',   // אפור כהה
          muted: '#737373',      // אפור בינוני
          light: '#ffffff',      // לבן לטקסט על רקע כהה
          gold: '#d97706',       // זהב כהה לטקסטים
        },
        // צבעי תמיכה
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        // פונטים בעברית
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #d97706 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(245, 158, 11, 0.25)',
        'gold-lg': '0 10px 40px -3px rgba(245, 158, 11, 0.3)',
        'luxury': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.8)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config;