// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  ssr: true,

  spaLoadingTemplate: false,

  devServer: {
    port: 3002
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  css: ['/public/assets/css/myProject.webflow.css', '/public/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],

  components: ['~/components/modals', '~/components/shimmers', '~/components/widgets', '~/components'],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  }
})
