export default defineNuxtConfig({
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
        { rel: 'icon', type: 'image/svg', href: '/crystal.svg' }
      ]
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  plugins: [],
  modules: [
    '@nuxtjs/feed',
    '@nuxtjs/google-fonts',
    'vuetify'
  ],
  feed: {
    rss: true,
    json: true,
    async setup() {
      const {  content } = await useFetch('/posts.json')
      return [
        {
          path: '/feed.xml',
          type: 'rss2',
          cacheTime: 1000 * 60 * 15,
          async create() {
            return {
              title: 'My personal page',
              link: 'https://lxj230.xyz/feed.xml',
              description: 'Welcome to my personal page',
              items: content.value
            }
          }
        }
      ]
    }
  },
  googleFonts: {
    families: {
      Roboto: [400, 700]
    }
  },
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'mdi'
    }
  }
})
