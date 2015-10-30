/**
 * Created by roxanap on 30.10.2015.
 */
module.exports = function(config){
    config.set({


        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            './app/**/*.js',
            './test/**/*.js'
        ],
        reporters: ['progress'],

        port:9876,
        colors:true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false
    });
};