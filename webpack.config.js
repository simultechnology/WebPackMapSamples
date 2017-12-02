let path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: "./public/js/app.bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    host: '127.0.0.1',
    port: 29591,
    watchOptions: {
      watch: true
    },
    open: true
  },
};