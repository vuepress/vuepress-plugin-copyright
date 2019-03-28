const { resolve } = require('path')
const stringify = require('@shigma/stringify-object')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-copyright',

  alias: {
    '@clipboardComponent': options.clipboardComponent
      ? options.clipboardComponent
      : resolve(__dirname, 'Clipboard.vue'),
  },

  clientRootMixin: resolve(__dirname, 'rootMixin.js'),

  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),

  clientDynamicModules: {
    name: 'copyright-options.js',
    content: `export default ${stringify({
      noCopy: options.noCopy,
      noSelect: options.noSelect,
      minLength: options.minLength,
      authorName: options.authorName,
    })}`,
  },
})
