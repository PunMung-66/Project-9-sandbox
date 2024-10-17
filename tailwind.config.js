/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      primary: {
        DEFAULT: "#DEF81C",
        50: "#FBFFE7",
        100: "#F6FCC3",
        300: "#E5F96E",
        400: "#DFF547",
        500: "#DEF81C",
        700: "#C1CD00",
      },
      secondary: {
        DEFAULT: "#222222",
        50: "#FAFAFA",
        100: "#F5F5F5",
        300: "#E1E1E1",
        500: "#9F9F9F",
        700: "#626262",
        900: "#222222",
      },
      success: "#13CE66",
      info: "#3366FF",
      warn: "#FFB020",
      danger: "#FF000D",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
