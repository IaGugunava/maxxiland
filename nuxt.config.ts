// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0"
  },
  app: {
    head: {
      title: 'Maxxiland',
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
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
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    }
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" }
    ]
  },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-swiper',
    'nuxt-easy-lightbox',
    '@nuxtjs/sitemap'
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