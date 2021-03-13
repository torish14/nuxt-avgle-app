const Url = 'http://localhost:3000'
const searchUrl = 'https://api.avgle.com/v1/search/'

const baseHost = process.env.BASE_HOST || Url
const baseDir = process.env.BASE_DIR || '/'
const baseUrl = baseHost + baseDir

const lang = 'ja'
const siteName = 'Porngle'
const siteDesc = '無料えちえちサイトです。Porngleは検索機能に特化したアダルトサイトを目指しています。Pornhubの屍を越えていけ。'
const siteKeywords = 'porn, Porn, porngle, Porngle, アダルト, アダルトサイト, エロ, エロサイト'

const shortName = 'Porngle'
// const ogpImages = baseUrl + 'img/ogp/'

export default {
  // srcDir: 'app',
  ssr: false,
  target: 'static',
  telemetry: false,
  generate: {
    fallback: true,
    exclude: ['/sampleSuggest'],
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang,
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - Porngle',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, minimal-ui',
      },
      // {
      //   name: 'referrer',
      //   content: 'no-referrer'
      // },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || siteDesc,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: siteKeywords,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteName,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      // {
      //   hid: "og:image",
      //   property: "og:image",
      //   content: `${ogpImages}home.jpg`
      // },
      {
        hid: 'og:image',
        property: 'og:image',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    // link: [{
    //   rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css'
    // }],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon.ico',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#6b46c1',
  },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#a0aec0',
  //   background: 'black',
  // },
  /*
   ** Global CSS
   */
  css: ['ress'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/localStorage.js', mode: 'client' },
    // { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/axios.js', mode: 'client' },
    '~/plugins/sentry.js',
    '~/plugins/logrocket.js',
    { src: '~/plugins/pagination.js', mode: 'client' },
    '~/plugins/scroll.js',
    { src: '~/plugins/lazyload.js', mode: 'client' },
    // { src: '~/plugins/infiniteloading.js', mode: 'client' }
  ],
  router: {
    base: baseDir,
    prefetchLinks: false,
  },
  /*
   ** Nuxt.js dev-
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // Doc: https://typescript.nuxtjs.org/ja/
    '@nuxt/typescript-build',
    // Doc: https://typed-vuex.roe.dev
    'nuxt-typed-vuex',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device'
  ],
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
  optimizedImages: {
    optimizeImages: true,
    // optimizeImagesInDev: true,
  },
  pwa: {
    icon: false,
    meta: {
      // mobileAppIOSオプションを有効にする前に、以下記事を一読すること。
      // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
      // mobileAppIOS: true
    },
    manifest: {
      lang,
      name: siteName,
      short_name: shortName,
      description: siteDesc,
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
    },
    workbox: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: baseDir + '.*',
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'my-cache',
            cacheExpiration: {
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
      ],
    },
  },
  googleAnalytics: {
    // id: 'G-S2NZP1L0D8',
  },
  gtm: {
    // id: 'G-S2NZP1L0D8'
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  sitemap: {
    // 生成されるサイトマップファイルの名前
    path: '/sitemap.xml',
    // サイト名
    hostname: 'https://example.com',
    // 除外したいURL
    exclude: ['/sampleSuggest', '/search', '/suggest'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/robots',
  ],
  workbox: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: baseDir + '.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30,
          },
        },
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxyHeaders: false,
    credentials: false,
    proxy: true,
    retry: {
      retries: 3,
    },
    // prefix: process.browser ? '' : process.env.API_HOST,
    // timeout: 3000
  },
  proxy: {
    '/api': {
      target: Url || process.env.API_HOST || searchUrl,
      pathRewrite: {
        '^/api/': '/',
      },
      changeOrigin: true,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    transpile: [/typed-vuex/],
    render: {
      bundleRenderer: {
        shouldPreload: (type) => {
          return ['script', 'style', 'font'].includes(type)
        },
      },
      static: {
        maxAge: 60 * 60 * 24 * 365 * 1000,
      },
    },
    extend(config) {
      const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
      config.plugins.push(new HardSourceWebpackPlugin())
      config.performance = config.performance || {}
      config.performance.maxEntrypointSize = 1200 * 1024
      config.performance.maxAssetSize = 700 * 1024
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
    },
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
    terser: {
      terserOptions: {
        compress: { drop_console: true },
      },
    },
  },
}
