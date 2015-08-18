module.exports = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /bootstrap\/js\//, loader: 'imports-loader?jQuery=jquery' },
      { test: /\.woff$/,   loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/,    loader: 'file-loader' },
      { test: /\.eot$/,    loader: 'file-loader' },
      { test: /\.svg$/,    loader: 'file-loader' }
    ]
  },
  plugins: []
};
