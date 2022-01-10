module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
}
