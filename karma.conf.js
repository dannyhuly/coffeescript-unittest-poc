module.exports = function (config) {
    config.set({

        // frameworks to use
        frameworks: ['jasmine'],

        files: [
            'app/**/*.js',

            //include map and source files (for debug)
            { pattern: 'app/**/*.coffee', included: false },
            { pattern: 'app/**/*.js.map', included: false },
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/**/*.js': ['coverage']
        },

        reporters: [
            'progress', //output unittest progress to console
            'coverage', //generate a coverage html reporter
            'html'      //generate a unittest html reporter
        ],

        coverageReporter: {
            type : 'html',
            dir : 'tests/coverage'
        },

        htmlReporter: {
           outputDir: 'tests/units-results',
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome (has to be installed with `npm install karma-chrome-launcher`)
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - PhantomJS2 (has to be installed with `npm install karma-phantomjs2-launcher`)
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false

    });
};
