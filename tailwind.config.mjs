/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
      },
      colors: {
        cx: {
          green: {
            950: "#001816",
            900: "#001D1B",
            850: "#002320",
            800: "#002825",
            700: "#00302B",
          },
          gold: {
            400: "#F0C767",
            500: "#E6B64C",
            600: "#D7A536",
          },
          cream: {
            100: "#FAF8F3",
            200: "#F6F3EC",
          },
          gray: {
            100: "#ECEDE9",
            300: "#D8D8D5",
            500: "#8D9592",
            800: "#303735",
          },
          void: "#001816",
          deep: "#001D1B",
          surface: "#002320",
          card: "#002825",
          border: "rgba(255, 255, 255, 0.12)",
        },
      },
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [],
};
