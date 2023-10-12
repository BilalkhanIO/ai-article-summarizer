/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      satoshi: ["Satoshi", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      boxShadow: {
        'inset-10px-50px-94px-0-rgb199-199-199-0-2': 'inset 10px -50px 94px 0 rgba(199, 199, 199, 0.2)',
        'custom': 'inset 10px -50px 94px 0 rgba(199, 199, 199, 0.2)',
        // Add other custom shadow classes as needed
      },
    },
    backdropBlur: {
      '10': 'blur(10px)',
      // Add other backdrop-blur classes as needed
    },
    },

  plugins: [],
};
