const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let appEntry;
let devtool;
let plugins;

const commonPlugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  new HtmlWebpackPlugin({
    title: 'Brew',
    template: './client/index.html',
    mobile: true,
    inject: false,
  }),

  // new FaviconsWebpackPlugin('./client/assets/logo.png'),
];

const commonAppEntries = [path.join(__dirname, 'client/index.js')];

if (process.env.NODE_ENV === 'production') {
  appEntry = commonAppEntries;
  devtool = 'source-map';
  plugins = [
    ...commonPlugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
  ];
} else {
  appEntry = [
    ...commonAppEntries,
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ];
  devtool = 'eval';
  plugins = [
    ...commonPlugins,
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ __DEV__: true, }),
  ];
}

module.exports = {
  entry: {
    app: appEntry,
    vendor: [
      'react',
      'react-dom',
      'react-relay',
      'react-router',
      'react-router-relay',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1' +
            '&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000&name=assets/[hash].[ext]',
      },
    ],
  },
  postcss: () => [precss, autoprefixer],
  plugins,
};
