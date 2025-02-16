export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
    rollupOptions: {
      external: [
        '@mdi/font/css/materialdesignicons.css',
        '@mdi/font/css/materialdesignicons.min.css'
      ]
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  },
  app: {
    head: {
      titleTemplate: '%s - 个人页面',
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/crystal.svg' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.0.0/css/materialdesignicons.min.css' }
      ]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/variables.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700]
    }
  },
  vuetify: {
    vuetifyOptions: {
      defaults: {
        global: {
          ripple: false
        }
      },
      theme: {
        defaultTheme: 'light'
      }
    }
  }
})
