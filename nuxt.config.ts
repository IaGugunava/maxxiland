// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0"
  },
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'error']
    }
  },

  runtimeConfig: {
    public: {
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    }
  },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-swiper',
    'nuxt-easy-lightbox'
  ],
  components: [{ path: "./components", pathPrefix: false }],
  //@ts-ignore
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  swiper: {
    //@ts-ignore
    modules: ["autoplay"]
  }
})