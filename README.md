# Next.js Client Template

A ready-to-use Next.js 15.4+ template for client projects 🚀

## Key Features

- ⚡ **Next.js 15.4.1** - Latest stable version
- 🏎️ **Turbopack** - Enhanced development speed
- ⚛️ **React 19** - Full support
- 🎨 **Tailwind CSS 3.4** - Modern styling
- 📱 **Responsive Design** - Works on all devices
- 🇮🇱 **Full Hebrew/RTL Support** - Built-in right-to-left support
- 🔧 **TypeScript 5.6** - Type safety
- 📏 **ESLint + Prettier** - Clean, consistent code
- 🧩 **Basic UI Components** - Ready to use
- 🎯 **SEO Optimized** - Meta tags configured
- 📂 **Organized Structure** - Clean folder layout

## Quick Start

1. **Create a new project from template:**
   ```bash
   # Method 1: Using GitHub CLI
   gh repo create client-name --template your-username/nextjs-client-template --clone
   
   # Method 2: Manual clone
   git clone https://github.com/your-username/nextjs-client-template.git client-name
   cd client-name
   rm -rf .git
   git init
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run the project with Turbopack:**
   ```bash
   npm run dev
   # Project runs on http://localhost:3000
   ```

## Available Scripts

```bash
npm run dev          # Development with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Auto-format with Prettier
npm run type-check   # TypeScript type checking
npm run check-all    # Run all checks
npm run clean        # Clean cache and node_modules
```

## Project Structure

```
src/
├── app/              # App Router - pages and layouts
├── components/       # Shared components
│   ├── ui/          # Basic UI components
│   ├── layout/      # Header, Footer, Navigation
│   └── common/      # Common components
├── lib/             # Utility functions and constants
├── hooks/           # Custom React hooks
└── types/           # TypeScript type definitions
```

## Customization

### 1. Update Client Details
- Edit `lib/constants.ts` with client information
- Replace logo in `components/layout/Header.tsx`
- Update `package.json` with project name

### 2. Customize Design
- Colors: `tailwind.config.ts`
- Fonts: `app/layout.tsx`
- Global styles: `app/globals.css`

### 3. Add Pages
```bash
src/app/
├── page.tsx         # Home page
├── about/
│   └── page.tsx     # About page
└── (marketing)/     # Route group
    ├── layout.tsx   # Shared layout
    └── services/
        └── page.tsx
```

## Production Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set Environment Variables
4. Deploy! 🚀

### Turbopack Build (Alpha)
For faster builds:
```bash
next build --turbo
```

## System Requirements

- **Node.js 18.17** or higher (20+ recommended)
- **npm 9** or higher

## Features Overview

### 🎨 Pre-built Components
- Button (primary, secondary, outline, ghost variants)
- Card with header and content sections
- Responsive navigation with mobile menu
- Footer with contact information

### 🔧 Development Tools
- TypeScript for type safety
- ESLint configuration for code quality
- Prettier for consistent formatting
- VSCode settings included

### 🌐 Internationalization
- Full RTL support for Hebrew/Arabic
- Google Fonts integration (Inter + Rubik)
- Locale-aware formatting utilities

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Container component for consistent spacing

---

Built with ❤️ for modern web development
