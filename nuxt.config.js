export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mediconect',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: true},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/358acff005.js', crossOrigin: 'anonymous'}
    ]
  },

  // global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components:  [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/global', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  axios: {
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:8000',

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        user: {
          // autoFetch: true
        },
        token: {
          global: true,
          // maxAge: 4 hours
        },
        endpoints: {
          login: { url: '/api/v1/auth/login/', method: 'post' },
          logout: false,
          user: { url: '/api/v1/profile/me'},
        }
      }
    },
    redirect: {
      home: '/',
      callback: false,
      login: '/auth/login/',
      logout: '/auth/login/',
    }
  },
  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
