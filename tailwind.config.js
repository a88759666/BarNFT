/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms',
        '5000': '5000ms',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      keyframes: {
        swing: {
          '0%': { transform: 'translateX(-3%)', opacity: .9 },
          '50%': { transform: 'translateX(0%)', opacity: .5},
          '100%': { transform: 'translateX(3%)', opacity: .8 },
        },
        absorb: {
          '0%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        liftOff: {
          '0%': { transform: 'translateY(30%) scale(.5)' },
          '100%': { transform: 'translateY(-5%) scale(1)' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
        slideSlow: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        rotate: {
          '0%': { transform: 'translateX(100%) translateY(100%) rotate(0deg)' },
          '50%': { transform: 'translateX(200%) translateY(150%) rotate(180deg)' },
          '75%': { transform: 'translateX(300%) translateY(170%) rotate(350deg)' },
          '100%': { transform: 'translateX(500%) translateY(0%) rotate(360deg)', opacity: 0 },
        },
        rotateCombine:{
          '0%': { transform: 'translateX(0%) translateY(-10%) rotate(0deg) scale(.2)' },
          '50%': { transform: 'translateX(10%) translateY(10%) rotate(180deg) scale(.4)' },
          '75%': { transform: 'translateX(-10%) translateY(20%) rotate(270deg) scale(.6)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        combineA:{
          '0%': { transform: 'translateX(0%) translateY(0%) rotate(0deg) scale(.2)', opacity: 0  },
          '50%': { transform: 'translateX(20%) translateY(30%) rotate(180deg) scale(.4)' },
          '75%': { transform: 'translateX(50%) translateY(-30%) rotate(270deg) scale(.6)', opacity: 0.9 },
          '100%': { transform: 'translateX(120%) translateY(0%) rotate(360deg) scale(1)', opacity: 0 },
        },
        combineB:{
          '0%': { transform: 'translateX(0%) translateY(0%) rotate(0deg) scale(.2)', opacity: 0  },
          '50%': { transform: 'translateX(-20%) translateY(-30%) rotate(270deg) scale(.4)' },
          '75%': { transform: 'translateX(-30%) translateY(30%) rotate(180deg) scale(.6)', opacity: 0.9 },
          '100%': { transform: 'translateX(-150%) translateY(0%) rotate(360deg) scale(1)', opacity: 0 },
        },
        rotateCircle:{
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: 0  },
          '50%': { transform: 'rotate(120deg) scale(.9)' },
          '75%': { transform: 'rotate(240deg) scale(.8)' },
          '100%': { transform: 'rotate(360deg) scale(.6)', opacity: 1 },
        }
      },
      animation: {
        swing: 'swing 3s linear infinite',
        absorb: 'absorb 5s ease-in-out infinite',
        spin: 'spin 8s linear infinite',
        liftOff: 'liftOff 3s linear',
        slide: 'slide 6s linear infinite',
        slideSlow: 'slideSlow 8s linear alternate-reverse infinite',
        rotate: 'rotate 1s linear forwards',
        rotateCombine: 'rotateCombine 2s linear forwards',
        combineA: 'combineA 2s linear both 2s',
        combineB: 'combineB 2s linear both 4s',
        rotateCircle: 'rotateCircle 4s linear both 3s',


      }
    },
    colors: {
      'dark-100': '#000000',
      'dark-90': '#212121',
      'dark-80': '#1A191B',
      'dark-70': '#090909',
      'dark-60': '#222222',
      'dark-50': '#282828',
      'gray-dark': '#86888A',
      'gray': '#D9D9D9',
      'gray-light': '#F0F0F0',
      'gold': '#F3CC73',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('tailwindcss-animation'),
  ],
}