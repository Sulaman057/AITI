/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1500px' },
      xl: { max: '1279px' },
      lg: { max: '1050px' },
      md: { max: '850px' },
      sm: { max: '580px' },
      xs: { max: '475px' },
      xxs: { max: '375px' },
    },
    extend: {
      colors: {
        primary: '#004F6F',
        accent: '#00FFA9',
        bg: '#111111',
        dec: '#0077A7',
        lightprimary: '#008FC9'
      },
    },
  },
  plugins: [],
}
