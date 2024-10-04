import Typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

        "blue-500": "#00A3FF",
        "blue-600": "#0C95E2",
      },
      screens: {
        xs: "480px",
        "2xs": "360px",
      },
    },
  },
  plugins: [Typography()],
};
export default config;
