module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1900px',
    },
    extend: {
      colors: {
        "main": "#161616",
        "light-main": '#272727',
        "light-blue": "#4FB8EB",
        "light-purple": "#7B89CA",
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/bg.png')"
      }
    },
  },
  plugins: [],
}