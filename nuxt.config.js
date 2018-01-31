module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'achievements',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  loading: '~/components/loading.vue',
  css: [
    'tachyons/css/tachyons.min.css',
  ],
  build: {
    vendor: ['axios']
  },
  plugins: ['~/plugins/filters']
}
