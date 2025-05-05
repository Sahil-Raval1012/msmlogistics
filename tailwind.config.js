/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#75087d", // Your existing color
        secondary: {
          100: "#480e70",
          200: "#25023d",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        // Adding a gradient with the primary color
        'primary-gradient': 'linear-gradient(to right, #360167, #af1281)', // Example: Primary to Secondary
        'primary-dark': 'linear-gradient(to bottom, #531d79, #111111)', // Example: Primary to Dark
      },
      fontFamily: {
        philosopher: ['Philosopher', 'serif'], // Add 'serif' as a fallback
      },
    },
  },
  plugins: [],
};