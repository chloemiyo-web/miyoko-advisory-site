/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F4EE",
        ink: "#0E0E0E",
        sumi: "#1F1B16",
        gold: "#9E8654",
        mist: "#E8E2D7",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      lineHeight: {
        relaxed7: "1.7",
      },
      maxWidth: {
        narrative: "640px",
        text: "720px",
        wide: "1080px",
      },
    },
  },
  plugins: [],
};
