/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F9FAFB",
          header: "#FCFCFC",
          card: "#FFFFFF",
          muted: "#F5F5F5",
          tick: "#00B76E",
        },

        // Text colors
        colors: {
          primary: "#080808",
          secondary: "#696969",
          muted: "#6B7280",
          light: "#9CA3AF",
          inverse: "#FFFFFF",
          category: "#F1F5F9",
        },
      },

      // Font sizes
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["15px", { lineHeight: "24px" }],
        md: ["16px", { lineHeight: "18px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
        "6xl": ["60px", { lineHeight: "68px" }],

        // Specific use cases
        button: ["15px", { lineHeight: "24px", fontWeight: "600" }],
        caption: ["12px", { lineHeight: "16px" }],
        body: ["15px", { lineHeight: "24px" }],
        heading: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        subheading: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        Menu: ["16px", { lineHeight: "18px", fontWeight: "400" }],
        MenuHover: ["16px", { lineHeight: "18px", fontWeight: "600" }],
      },

      // Font family
      fontFamily: {
        sans: ["Poppins", "Nunito", "system-ui", "sans-serif"],
      },

      // Border radius
      borderRadius: {
        button: "8px",
        card: "16px",
        input: "8px",
      },

      // Box shadows
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.1)",
        button: "0 1px 2px rgba(0, 0, 0, 0.05)",
      },

      // Animations
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.3s ease-out",
      },

      // Gradients (use with bg-gradient-to-r)
      gradientColorStops: {
        "btn-primary-from": "#3B82F6",
        "btn-primary-to": "#2563EB",
      },
    },
  },
  plugins: [],
};
