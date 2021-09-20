import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'educa',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', name: 'og:title', content: '' },
      { hid: 'og:site_name', name: 'og:site_name', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'ROBOT', name: 'ROBOT', content: 'Index,Follow' },
      { hid: 'copyright', name: 'copyright', content: 'issei.com.br' },
      { hid: 'og:locale', name: 'og:locale', content: 'pt_BR' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.issei.com.br' },
      { hid: 'article:publisher', name: 'article:publisher', content: 'https://www.facebook.com/mauricioissei/' },
      { hid: 'article:modified_time', name: 'article:modified_time', content: '2021-08-25T17:18:35+00:00' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gtm.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  //https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config#best-practices
  publicRuntimeConfig: { 
    baseURL: process.env.BASE_URL,

  },
  privateRuntimeConfig: {
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#00bcd4',
      secondary: '#4caf50',
      accent: '#607d8b',
      error: '#ff5722',
      warning: '#ff9800',
      info: '#009688',
      success: '#8bc34a',
        }
      }
    }
  },

  sitemap: {
    hostname: 'https://www.issei.com.br',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
