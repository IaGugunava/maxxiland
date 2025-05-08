// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'error']
    }
  },

  modules: ['@nuxt/image', '@nuxt/ui'],
  components: [{ path: "./components", pathPrefix: false }],
  //@ts-ignore
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})