var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval',
  entry: './app/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:8080/dist/"
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  plugins: [HTMLWebpackPluginConfig]
}
