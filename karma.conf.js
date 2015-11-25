/**
 * Created by roxanap on 30.10.2015.
 */
module.exports = function(config){
    config.set({


        basePath: '',



        // files to include, ordered by dependencies
        files : [
            // include relevant Angular files and libs
            'app/lib/bower_components/angular/angular.js',
            'app/lib/bower_components/angular/angular-mocks.js',

            // include js files
            'app/js/app.js',

            // include unit test specs
            'test/unit/*.js'
        ],
        // files to exclude
        exclude : [
             'app/lib/angular/*.min.js'
        ],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch : false,

        // testing framework, be sure to install the karma plugin
        frameworks: ['jasmine'],

        // browsers to test against, be sure to install the correct karma browser launcher plugin
        browsers : ['Chrome',  'Firefox'],

        // progress is the default reporter
        reporters: ['progress'],

        // map of preprocessors that is used mostly for plugins
        preprocessors: {

        },

        // list of karma plugins
        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    })}