import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0px", // Apply 0 padding for all screen sizes by default
          sm: "0px",
          md: "0px",
          lg: "0px",
          xl: "0px",
          "2xl": "0px",
        },
        screens: {
          lg: "1366px", // Custom width for large screens
        },
      },
      colors: {
        primary: "#34bf49",
        surface: "#F3F4F4",
      },
    },
  },
  plugins: [],
};

export default config;
