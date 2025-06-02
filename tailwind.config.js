import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Utilise la classe .dark pour le mode sombre
  theme: {
    extend: {
      // Polices personnalisées
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
      },
      
      // Couleurs personnalisées - Système Crème + Bois
      colors: {
        // Palette principale
        cream: {
          50: 'rgb(251, 248, 243)',
          100: 'rgb(247, 242, 233)',
          200: 'rgb(243, 235, 220)',
          300: 'rgb(238, 227, 203)',
          400: 'rgb(232, 217, 182)',
          500: 'rgb(224, 204, 157)',
        },
        
        oak: {
          50: 'rgb(245, 235, 220)',
          100: 'rgb(235, 220, 195)',
          200: 'rgb(225, 205, 170)',
          300: 'rgb(215, 190, 145)',
          400: 'rgb(205, 175, 120)',
          500: 'rgb(195, 160, 95)',
          600: 'rgb(185, 145, 70)',
        },
        
        beech: {
          50: 'rgb(248, 240, 228)',
          100: 'rgb(242, 230, 208)',
          200: 'rgb(236, 220, 188)',
          300: 'rgb(230, 210, 168)',
          400: 'rgb(224, 200, 148)',
          500: 'rgb(218, 190, 128)',
        },
        
        walnut: {
          50: 'rgb(210, 185, 155)',
          100: 'rgb(185, 155, 120)',
          200: 'rgb(160, 125, 85)',
          300: 'rgb(135, 95, 50)',
          400: 'rgb(120, 85, 45)',
          500: 'rgb(105, 75, 40)',
          600: 'rgb(90, 65, 35)',
          700: 'rgb(75, 55, 30)',
          800: 'rgb(60, 45, 25)',
        },
        
        mahogany: {
          50: 'rgb(165, 115, 95)',
          100: 'rgb(145, 95, 75)',
          200: 'rgb(125, 75, 55)',
          300: 'rgb(105, 55, 35)',
          400: 'rgb(95, 50, 32)',
          500: 'rgb(85, 45, 28)',
          600: 'rgb(75, 40, 24)',
          700: 'rgb(65, 35, 20)',
          800: 'rgb(55, 30, 16)',
        },
        
        ebony: {
          50: 'rgb(115, 95, 85)',
          100: 'rgb(95, 75, 65)',
          200: 'rgb(75, 55, 45)',
          300: 'rgb(55, 35, 25)',
          400: 'rgb(45, 30, 22)',
          500: 'rgb(35, 25, 18)',
          600: 'rgb(30, 22, 16)',
          700: 'rgb(25, 18, 13)',
          800: 'rgb(20, 15, 11)',
          900: 'rgb(15, 12, 9)',
        },
        
        // Palette mode sombre
        'dark-base': {
          50: 'rgb(85, 70, 60)',
          100: 'rgb(70, 55, 45)',
          200: 'rgb(55, 40, 30)',
          300: 'rgb(40, 25, 15)',
          400: 'rgb(35, 22, 14)',
          500: 'rgb(30, 20, 12)',
          600: 'rgb(26, 18, 11)',
          700: 'rgb(22, 16, 10)',
          800: 'rgb(18, 14, 9)',
          900: 'rgb(14, 12, 8)',
        },
        
        'dark-surface': {
          100: 'rgb(65, 50, 40)',
          200: 'rgb(55, 40, 30)',
          300: 'rgb(45, 30, 20)',
          400: 'rgb(40, 26, 17)',
          500: 'rgb(35, 23, 15)',
          600: 'rgb(30, 20, 13)',
          700: 'rgb(25, 17, 11)',
        },
        
        'dark-accent': {
          100: 'rgb(220, 195, 160)',
          200: 'rgb(210, 185, 150)',
          300: 'rgb(200, 175, 140)',
          400: 'rgb(195, 170, 135)',
          500: 'rgb(190, 165, 130)',
          600: 'rgb(180, 155, 120)',
          700: 'rgb(170, 145, 110)',
        },
        
        'dark-text': {
          100: 'rgb(248, 245, 240)',
          200: 'rgb(245, 240, 235)',
          300: 'rgb(240, 235, 230)',
          400: 'rgb(235, 230, 225)',
          500: 'rgb(230, 225, 220)',
        },
        
        'dark-muted': {
          100: 'rgb(200, 175, 150)',
          200: 'rgb(190, 165, 140)',
          300: 'rgb(185, 160, 135)',
          400: 'rgb(180, 155, 130)',
          500: 'rgb(175, 150, 125)',
          600: 'rgb(165, 140, 115)',
        }
      },
      
      // Espacements personnalisés
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Animations personnalisées
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'glow': 'glow 2.5s ease-in-out infinite',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgb(85 45 28 / 0.3)' },
          '50%': { boxShadow: '0 0 20px rgb(85 45 28 / 0.6)' },
        },
      },
      
      // Box shadows personnalisées
      boxShadow: {
        'cream': '0 4px 6px -1px rgb(35 25 18 / 0.1)',
        'dark': '0 4px 6px -1px rgb(0 0 0 / 0.25)',
        'glow-cream': '0 0 15px rgb(85 45 28 / 0.3)',
        'glow-dark': '0 0 15px rgb(190 165 130 / 0.3)',
      },
      
      // Typography plugin - Configuration pour les articles
      typography: {
        DEFAULT: {
          css: {
            // Couleurs pour le contenu typographique
            '--tw-prose-body': 'rgb(35 25 18)',
            '--tw-prose-headings': 'rgb(85 45 28)',
            '--tw-prose-links': 'rgb(105 75 40)',
            '--tw-prose-bold': 'rgb(35 25 18)',
            '--tw-prose-quotes': 'rgb(105 75 40)',
            '--tw-prose-code': 'rgb(85 45 28)',
            
            // Mode sombre
            '--tw-prose-invert-body': 'rgb(240 235 230)',
            '--tw-prose-invert-headings': 'rgb(190 165 130)',
            '--tw-prose-invert-links': 'rgb(190 165 130)',
            '--tw-prose-invert-bold': 'rgb(240 235 230)',
            '--tw-prose-invert-quotes': 'rgb(190 165 130)',
            '--tw-prose-invert-code': 'rgb(190 165 130)',
          }
        }
      },
    },
  },
  
  // Plugins Tailwind CSS avec syntaxe ESM
  plugins: [
    aspectRatio,
    forms,
    typography,
  ],
}