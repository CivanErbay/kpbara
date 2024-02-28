/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
      backgroundImage: {
        heroBg: 'url("/assets/images/Rectangle_4.svg")',
      },
      content: {
        heroUnderline: 'url("/assets/images/underline.png")',
      },
    },
  },
  plugins: [],
};
