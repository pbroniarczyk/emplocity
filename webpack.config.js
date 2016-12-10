module.exports = {
  entry: './js/index.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react'],
          plugins: ['react-html-attrs', 'transform-class-properties']
        }
      }
    ]
  },

  output: {
    path: __dirname,
    filename: '/js/index.min.js'
  },
};
