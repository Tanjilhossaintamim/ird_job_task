/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-body": "#EBEEF2",
        "color-green": "#1FA45B",
        "color-text": "#393939",
        "color-skeleton": "#F1F7FA",
      },
    },
  },
  plugins: [],
};
