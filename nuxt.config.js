const {
  NODE_ENV,
  // DOMAIN = "",
  // ROOT = "",
  // BASE = "",
  // GOOGLE_ANALYTICS_ID = "",
  // SITE_NAME = "",
  // SHARE_IMAGE = "",
  // TILE_COLOR = "FFFFFF",
  // THEME_COLOR = "000000",
} = process.env;

const isProd = NODE_ENV === "production";
const isDev = !isProd;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demoSite',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "assets/styles/reset",
    "assets/styles/common",
    "assets/styles/print",
    "assets/styles/buttons",
  ],

  styleResources: {
    scss: [
        "~assets/styles/inject.scss",
        "~assets/styles/fonts/*.scss",
        "~assets/styles/vars/*.scss",
        "~assets/styles/utils/*.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/babylon2.js',
      mode: "client",
      srr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  stylelint: {fix: true},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
          modules: {
              localIdentName: "[name]__[local]__[hash:base64:5]",
              exportLocalsConvention: "camelCase",
          },
      },
    },
    terser: {
      terserOptions: {
          compress: {
              drop_console: isProd,
          },
      },
  },
  },
}
