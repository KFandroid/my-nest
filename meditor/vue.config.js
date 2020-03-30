// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devServer: {
       proxy: 'http://localhost:3000'
    },
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
          ]
    }
}