import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      suse: ["SUSE", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        homeHero: "url('/bookflight.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
