import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAD848",
        foreground: "var(--foreground)",
        fontLight: "#667A81",
        fontDark: "#1C1919",
        YellowBtnColor: "#F9D434",
        secondaryBackground: "#FFF4E5",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(177.71deg, #000000 -24.56%, rgba(0, 0, 0, 0.52) 98.08%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        figtree: ["var(--font-figtree)"],
      },
      screens: {
        lg: "1300px",
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
