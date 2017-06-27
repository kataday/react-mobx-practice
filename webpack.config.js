var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client.js',
  ],

  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.css', '.scss', '.js', '.jsx', '.json'],
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  cache: true,

  module: {
    rules: [{
      test: /\.js$/,
      use: [
        "babel-loader",
      ],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // new webpack.NoEmitOnErrorsPlugin()
  ],

  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    hot: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'www'),
    historyApiFallback: true,
    stats: "verbose"
  }
}
