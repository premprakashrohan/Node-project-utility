// Karma configuration
// Generated on Sun Jun 24 2018 13:39:01 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','karma-typescript'],
 //plugins: [
     //require('karma-jasmine'),
     //require('karma-chrome-launcher'),
     //require('karma-firefox-launcher'),
     //require('karma-jasmine-html-reporter'),
     //require('karma-coverage-istanbul-reporter'),
    // require('@angular/cli/plugins/karma')
  // ],
   client: {
     clearContext: false // leave Jasmine Spec Runner output visible in browser
   },
   coverageIstanbulReporter: {
     reports: ['html', 'lcovonly'],
     fixWebpackSourcePaths: true
   },

    // list of files / patterns to load in the browser
    files: [
      '*.ts'
    ],


    // list of files / patterns to exclude
    exclude: [
      'node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '*.ts': ['karma-typescript'] 
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     browsers: ['Chrome', 'Chrome_without_security'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser

       // you can define custom flags
       customLaunchers: {
         Chrome_without_security: {
           base: 'Chrome',
           flags: ['--disable-web-security']
         }},
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
