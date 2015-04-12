var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './scripts/app.js']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime&cacheDirectory=true' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
      new webpack.NoErrorsPlugin()
  ]
};
 