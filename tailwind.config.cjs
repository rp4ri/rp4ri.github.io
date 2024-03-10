/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'midnight': {
          DEFAULT: '#1F2937', // Color base
          '50': '#627fa7',   // Tonalidad más clara
          '100': '#496183',
          '200': '#474c55',
          '300': '#3b4e68',
          '400': '#33445b',
          '500': '#1F2937',  // Tonalidad base (puedes repetir el color base aquí)
          '600': '#1c2430',
          '700': '#191f29',
          '800': '#151a22',
          '900': '#12161b'
        },
        'custom-background': '#171717',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
