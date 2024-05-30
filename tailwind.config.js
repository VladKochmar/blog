/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '0 0 50%',
        4: '0 0 25%',
        300: '0 1 300px',
        405: '0 1 405px',
        490: '0 1 490px',
        520: '0 1 520px',
        624: '0 1 624px',
        730: '0 1 730px',
        840: '0 1 840px'
      },
      colors: {
        black: {
          23: '#232536'
        },
        yellow: {
          light: '#FBF6EA',
          medium: '#FFD050',
          dark: '#EDC14A'
        },
        purple: {
          dark: '#592EA9'
        },
        gray: {
          light: '#F4F4F4',
          medium: '#6D6E76',
          dark: '#4C4C4C'
        },
        lavender: '#F4F0F8'
      },
      fontFamily: {
        title: ['Sen'],
        basic: ['Inter']
      },
      height: {
        320: '320px'
      },
      maxWidth: {
        370: '370px',
        446: '446px',
        516: '516px',
        600: '600px',
        710: '710px',
        768: '768px',
        800: '800px',
        860: '860px',
        medium: '1056px',
        main: '1312px'
      },
      borderWidth: {
        1: '1px'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(136px, 1fr))'
      },
      padding: {
        50: '50%'
      }
    }
  },
  plugins: []
}
