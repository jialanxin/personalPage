import colors from 'vuetify/es5/util/colors'
import json from './pages/posts.json'

export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + "个人页面",
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/crystal.svg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/feed'
  ],
  feed: [
    {
      path: '/feed.xml',
      type: 'rss2',
      create(feed) {
        feed.options = {
          title: 'My personal page',
          link: 'https://lxj230.xyz/feed.xml',
          description: 'Welcome to my personal page'
        }
        json.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: post.id,
            link: `https://lxj230.xyz${post.link}`,
            description: post.lastUpdate,
            date: new Date(post.lastUpdate+"T00:00:00+08:00")
          })
        })
      },
    }
  ],

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
