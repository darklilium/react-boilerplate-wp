const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.scss', '.css', '.js', '.json','.webpack.js', '.web.js', '.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'stage-0', 'react','stage-2'] }
      }
    ]
  },
  devServer: {
    inline: true,
    port: 443,
    host: "127.0.0.1",
    historyApiFallback: true
  },



  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin({filename: '../css/style.css',  allChunks: true} ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
