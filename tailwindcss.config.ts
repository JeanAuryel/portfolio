/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', // Correct pour Tailwind CSS 4
  theme: {
    extend: {
      // Configuration du conteneur (ne peut pas être faite dans CSS)
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      // Les délais de transition qui ne sont pas standard
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1100': '1100ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      // Ombres personnalisées
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px 0 rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};