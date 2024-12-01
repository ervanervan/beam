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
          lg: "4rem",
        },
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },

      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
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
          whiteSecondary: "##E5E5E5",
          purple1: "#7347FF",
          purple2: "#5D39D2",
        },
        background: {
          DEFAULT: "#F9FAFB",
          white: "#F9F4F4",
          gradientPrimary: "linear-gradient(to right, #E8E1FF, #FFEADB)",
          gradientSecondary: "linear-gradient(to right, #CFC1FF, #FFE1CC)",
        },
        primary: {
          DEFAULT: "#2563EB",
          primary50: "#F1EDFF",
          primary100: "#E3DAFF",
          primary200: "#C7B5FF",
          primary300: "#AB91FF",
          primary400: "#8F6CFF",
          primary500: "#7347FF",
          primary600: "#5D39D2",
          primary700: "#482BA5",
          primary800: "#321C78",
          primary900: "#1D0E4B",
        },
        secondary: {
          DEFAULT: "#10B981",
          secondary50: "#FFF7F1",
          secondary100: "#FFEEE3",
          secondary200: "#FFDEC6",
          secondary300: "#FFCDAA",
          secondary400: "#FFBD8D",
          secondary500: "#FFAC71",
          secondary600: "#DA905A",
          secondary700: "#B67344",
          secondary800: "#91572D",
          secondary900: "#6D3A17",
        },
        tertiary: {
          DEFAULT: "#F59E0B",
          tertiary50: "#F5F5F5",
          tertiary100: "#EBEBEB",
          tertiary200: "#D8D8D8",
          tertiary300: "#C4C4C4",
          tertiary400: "#B1B1B1",
          tertiary500: "#9D9D9D",
          tertiary600: "#7F7F7F",
          tertiary700: "#626262",
          tertiary800: "#444444",
          tertiary900: "#272727",
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
