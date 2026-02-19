// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'serif': ['var(--font-playfair)', 'Times New Roman', 'serif'],
//         'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
//         'display': ['var(--font-clash)', 'sans-serif'],
//       },
//       colors: {
//         primary: '#1A1A1A',
//         secondary: '#4A4A4A',
//         accent: '#C9A959',
//         'accent-dark': '#8B6E3C',
//         border: '#E5E5E5',
//       },
//       animation: {
//         'fade-in': 'fadeIn 1s ease-in-out',
//         'fade-in-up': 'fadeInUp 0.8s ease-out',
//         'slide-in': 'slideIn 0.6s ease-out',
//         'float': 'float 6s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideIn: {
//           '0%': { transform: 'translateX(-30px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }  





// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Times New Roman', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-poppins)', 'sans-serif'], // Poppins as display font
      },
      colors: {
        primary: '#1A1A1A',
        secondary: '#4A4A4A',
        accent: '#C9A959',
        'accent-dark': '#8B6E3C',
        border: '#E5E5E5',
      },
      // ... rest of your config
    },
  },
  plugins: [],
}