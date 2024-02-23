/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "background-wave": {
          from: {backgroundPosition: "0% center"},
          to: {backgroundPosition: "-200% center"},
        },
        "fade-in": {
          "0%": {opacity: 0, transform: "scale(0.9)"},
          "100%": {opacity: 1, transform: "scale(1.0)"},
        },
        "fade-out": {
          "0%": {opacity: 1, transform: "scale(1.0)"},
          "100%": {opacity: 0, transform: "scale(0.9)"},
        },
      },
      animation: {
        "background-wave": "background-wave linear infinite",
        "fade-in": "fade-in 0.1s ease-out",
        "fade-out": "fade-out 0.1s ease-in",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
  ],
};
