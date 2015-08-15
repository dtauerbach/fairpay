var webpack = require('webpack');
var path = require('path');

// Karma configuration
// Generated on Fri Aug 14 2015 17:48:36 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests.webpack.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },

    webpack: {
      module: {
	loaders: [
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.jsx$/, loader: 'jsx-loader' },
          { test: /\.less$/, loader: 'less-loader' },
          { test: /bootstrap\/js\//, loader: 'imports-loader?jQuery=jquery' },
          { test: /\.woff$/,   loader: 'url-loader?limit=10000&minetype=application/font-woff' },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
          { test: /\.ttf$/,    loader: 'file-loader' },
          { test: /\.eot$/,    loader: 'file-loader' },
          { test: /\.svg$/,    loader: 'file-loader' }
	]
      },
      plugins: []
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
