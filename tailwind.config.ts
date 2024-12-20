import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "0rem",
        },
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },

      // screens: {
      //   sm: "375px",
      //   md: "768px",
      //   lg: "1200px",
      // },

      backgroundImage: {
        "hero-pattern": "url('/assets/images/hero-image.webp')",
        "help-pattern": "url('/assets/images/help-image.png')",
        "city-pattern": "url('/assets/images/city-image.png')",
        "partner-pattern": "url('/assets/images/partner-image.png')",
        "hero-download-pattern":
          "url('/assets/images/hero-download-image.png')",
        "hero-city-pattern": "url('/assets/images/hero-city-image.png')",
        "hero-partner-pattern": "url('/assets/images/hero-partner-image.png')",
        gradientPrimary: "linear-gradient(to right, #E8E1FF, #FFEADB)",
        gradientPrimaryHover: "linear-gradient(to right, #E5E5E5, #E5E5E5)",
        gradientSecondary: "linear-gradient(to right, #CFC1FF, #FFE1CC)",
        gradientSecondaryHover: "linear-gradient(to right, #E5E5E5, #E5E5E5)",
        gradientTertiary: "linear-gradient(to right, #FFEADB, #E8E1FF)",
        gradientTertiaryHover: "linear-gradient(to right, #E5E5E5, #E5E5E5)",
      },

      fontSize: {
        title: ["4.5rem", "5rem"], // Title: 72px / 80px
        h1: ["3rem", "3.25rem"], // Heading 1: 48px / 52px
        h2: ["2.375rem", "3.125rem"], // Heading 2: 38px / 50px
        h3: ["2rem", "2.875rem"], // Heading 3: 32px / 46px
        h4: ["1.5rem", "2.5rem"], // Heading 4: 24px / 40px
        h5: ["1.25rem", "2.125rem"], // Heading 5: 20px / 34px
        h6: ["1.125rem", "1.875rem"], // Heading 6: 18px / 30px
        nav: ["0.875rem", "1.25rem"], // Nav/Buttons: 14px / 20px
        body1: ["1.125rem", "1.875rem"], // Body/1: 18px / 30px
        body2: ["1rem", "1.875rem"], // Body/2: 16px / 30px
        body3: ["0.875rem", "1.5rem"], // Body/3: 14px / 24px
        body4: ["0.625rem", "1rem"], // Body/4: 10px / 16px
        kategori: ["0.875rem", "1.5rem"], // Kategori: 14px / 24px
      },

      colors: {
        text: {
          DEFAULT: "#000000",
          blackPrimary: "#222222",
          blackSecondary: "#464646",
          blackTertiary: "#AFAFAF",
          whitePrimary: "#F9F9F9",
          whiteSecondary: "#E5E5E5",
          purple1: "#7347FF",
          purple2: "#5D39D2",
        },
        background: {
          DEFAULT: "#F9FAFB",
          white: "#F9F4F4",
          whitebg: "#F4F4F4",
        },
        primary: {
          50: "#F1EDFF",
          100: "#E3DAFF",
          200: "#C7B5FF",
          300: "#AB91FF",
          400: "#8F6CFF",
          500: "#7347FF",
          600: "#5D39D2",
          700: "#482BA5",
          800: "#321C78",
          900: "#1D0E4B",
        },
        secondary: {
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#E5E5E5",
          300: "#D9D9D9",
          400: "#CCCCCC",
          500: "#BFBFBF",
          600: "#A1A1A1",
          700: "#848484",
          800: "#666666",
          900: "#494949",
        },
        tertiary: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D8D8D8",
          300: "#C4C4C4",
          400: "#B1B1B1",
          500: "#9D9D9D",
          600: "#7F7F7F",
          700: "#2E2E2E",
          800: "#444444",
          900: "#272727",
        },
        others: {
          stack: "#909086",
          blueChalk: "#E8E1FF",
          karry: "#FFEADB",
          perfume: "#CFC1FF",
          tuftBush: "#FFE1CC",
          santasGray: "#A09EA8",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
