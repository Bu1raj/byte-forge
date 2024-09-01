/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        inner: "inset 0 -5px 25px 0px rgba(131, 180, 255, 0.2)",
        innerOnHover: "inset 0 0px 25px 0px rgba(131, 180, 255, 0.1)",
        glow: "0 0 20px 3px rgba(131, 180, 255, 0.3)",
        inner2: 'inset 0 -5px 25px -3px rgba(131, 180, 255, 0.2)',
      },
      backgroundSize: {
        "300%": "300%",
      },
      colors: {
        activeBorderColor: "#83B4FF",
        subtleBackground: "#131823",
        border: "#1e293b",
        input: "#03346E",
        ring: "#03346E",
        background: "#020817",
        foreground: "#FFFFFF",
        muted: "#2E3F6C",
        primary: {
          DEFAULT: "#03346E",
          muted: "#012146",
        },
        secondary: {
          DEFAULT: "#83B4FF",
          muted: "#90ABD5",
        },
        tertiary: {
          DEFAULT: "#FDFFE2",
          muted: "#A6A687",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-spin-left": {
          "100%": { transform: "rotate(-180deg)" },
        },
        "border-spin-right": {
          "100%": { transform: "rotate(0deg)" },
        },

        "login-border-spin": {
          "100%": { transform: "rotate(-360deg)" },
        },

        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-30px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-spin-left": "border-spin-left 1s ease-in-out infinite",
        "border-spin-right": "border-spin-right 1s ease-in-out infinite",
        "login-border-spin": "login-border-spin 5s linear infinite",
        gradient: "animatedgradient 5s ease infinite alternate",
        float: "float 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
