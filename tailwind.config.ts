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
        // Modern Primary - Indigo/Blue gradient friendly
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',  // Main primary
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        
        // Modern Secondary - Purple
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // Main secondary
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        
        // Modern Accent - Teal/Cyan
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Main accent
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        
        // Modern Grays - Slate
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Semantic Colors
        success: '#10b981',  // Emerald
        warning: '#f59e0b',  // Amber
        danger: '#ef4444',   // Red
        info: '#3b82f6',     // Blue
        
        // Dark mode preparation
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
        },
        
        // Light mode
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          border: '#e2e8f0',
        },
      },
      
      // Modern gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'primary-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(240, 100%, 74%, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.1) 0px, transparent 50%)
        `,
      },
      
      // Modern shadows
      boxShadow: {
        'glow': '0 0 20px -5px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 40px -5px rgba(99, 102, 241, 0.5)',
        'inner-glow': 'inset 0 0 20px -5px rgba(99, 102, 241, 0.2)',
      },
      
      // Modern animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      
      fontFamily: {
        sans: ['var(--font-inter)'],
        hebrew: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
};

export default config;