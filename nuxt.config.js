const URL = 'http://localhost:3000'

const baseHost = process.env.BASE_HOST || URL
const baseDir = process.env.BASE_DIR || '/'
const baseUrl = baseHost + baseDir

const lang = 'ja'
const siteName = 'えちえちサイト'
const siteDesc = 'えちえちサイト'
const siteKeywords = 'えち, えちえち, えちえちサイト, アダルト, アダルトサイト, エロ, エロサイト'

// const ogpImages = baseUrl + 'img/ogp/'

export default {
  // ! ssr を前提
  // ssr の場合でログイン機能がある場合は色々考慮が必要
  // aws でデプロイが無難
  srcDir: 'app',
  ssr: false,
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang,
      prefix: 'og: http://ogp.me/ns#'
    },
    // titleTemplate: `%s - ${siteName}` + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || siteDesc
      },
      {
        name: 'referrer',
        content: 'no-referrer'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: siteKeywords
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteName
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc
      },
      // {
      //   hid: "og:image",
      //   property: "og:image",
      //   content: `${ogpImages}home.jpg`
      // },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: {
    color: '#6b46c1',
    continuous: true
  },
  /*
   ** Global CSS
   */
  // css: ['firebaseui/dist/firebaseui.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/persistedstate.js', mode: 'client' },
    { src: '~/plugins/localStorage.js', mode: 'client' },
    // { src: '~plugins/ga.js', mode: 'client' },
    // { src: '~/plugins/lazyload.js', mode: 'client' },
    '~/plugins/axios.js',
    '~/plugins/sentry.js',
    '~/plugins/pagination.js'
  ],
  router: {
    // middleware: ['authenticated']
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    ['@nuxtjs/pwa', { icon: false }]
  ],
  workbox: {
    // 開発環境でもPWAできるように
    // dev: true,
    // offline: false,
    // skipWaiting: true,
    // clientsClaim: true,
    // runtimeCaching: [
    //   {
    //     strategyOptions: {
    //       cacheExpiration: {
    //         maxAgeSeconds: 60 * 60 * 24 // 1日
    //       },
    //       cacheableResponse: {
    //         statuses: [200]
    //       }
    //     }
    //   }
    // ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxyHeaders: false,
    credentials: false,
    proxy: true,
    // baseURL: process.browser ? '' : process.env.API_HOST
    baseURL: URL
    // timeout: 3000
  },
  proxy: {
    '/api': {
      target: URL
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      config.performance = config.performance || {}
      config.performance.maxEntrypointSize = 1200 * 1024
      config.performance.maxAssetSize = 700 * 1024
    },
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
