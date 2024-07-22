const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    // // when using the entry-only string format,
    // // template is inferred to be `public/subpage.html`
    // // and falls back to `public/index.html` if not found.
    // // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.ts'
    index: 'src/pages/home/main.ts',
    subpage: 'src/pages/subpage/main.ts'
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/subpage/, to: '/subpage/index.html' }
      ]
    }
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
})
