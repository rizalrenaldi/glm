export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'God-like Musician | Rizal Renaldi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@rizalrenaldi' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://rizalrenaldi.com'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Free Placeholder Logo For Your Design Mock-up. SVG logo. Download or copy & paste.'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Free Placeholder Logo For Your Design Mock-up. SVG logo. Download or copy & paste.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/logopisum.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://rizalrenaldi.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Free Placeholder Logo For Your Design Mock-up. SVG logo. Download or copy & paste.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Free Placeholder Logo For Your Design Mock-up. SVG logo. Download or copy & paste.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logopisum.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/logopisum.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'rizalrenaldi'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://rizalrenaldi.com`
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~layouts/papamano.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/aos", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    // '@nuxtjs/google-analytics',
    // '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxtjs/google-adsense',
    'nuxt-lazy-load',
    'nuxt-webfontloader',
    'vue-scrollto/nuxt',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },
  googleAnalytics: {
    id: ''
  },
  'google-adsense': {
    id: ''
  },
  webfontloader: {
    google: {
      families: ['Inter:400,600,700,800'] //Loads Lato font with weights 400 and 700
    }
  },
}
