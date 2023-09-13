/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }
      'xl': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }
      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }
      'md': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }
      'sm': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }
      'xs': { 'max': '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        gradColor1: "rgb(97, 112, 182)",
        gradColor2: "rgb(8, 170, 160)",
        linkBtnColor: "#5e7d88"
      },
      fontSize: {
        base2: "1.0625rem",
        sm2: "0.9375rem"
      },
      padding: {
        12.5: "3.125rem",
      },
      height: {
        26: "6.5rem",
      },
      boxShadow: {
        header: "rgba(0, 0, 0, 0.4) 0px 1px 5px",
        footer: "rgba(0, 0, 0, 0.4) 0px 1px 5px inset",
      }
    },
  },
  plugins: [],
}
