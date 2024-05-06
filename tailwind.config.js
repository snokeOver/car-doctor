/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#FF3811",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primar: "blue",
          secondary: "teal",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primar: "blue",
          secondary: "teal",
        },
      },
    ],
  },
};
