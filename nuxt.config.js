module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Steam Battles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  loading: '~/components/loading.vue',
  css: [
    'bulma/css/bulma.css',
    '~/css/main.css'
  ],
  build: {
    vendor: ['axios', 'vue-js-modal']
  },
  plugins: ['~/plugins/filters', '~plugins/vue-js-modal'],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
