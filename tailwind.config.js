// import { Config } from 'tailwindcss'

const config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  
  theme: {
      screens: {
        xsm: '375px',
        xs: '480px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
        '2xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          sm: '32px',
          md: '64px',
          lg: '80px',
          xl: '150px',
          '2xl': '150px',
        },
      },
  },
  plugins: [],
}

export default config