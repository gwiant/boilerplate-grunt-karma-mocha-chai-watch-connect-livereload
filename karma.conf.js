module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'requirejs'],
        files: [
            'src/test/karma-test-main.js',
            { pattern: 'src/**/*.js', included: false }
        ],
        exclude: [
        ],
        junitReporter: {
            outputFile: 'dist/test/test-results.xml'
        },
        coverageReporter: {
            reporters: [
                {type: 'lcov'},
                {type: 'html'},
                {type: 'cobertura'},
                {type: 'text-summary'}
            ],
            dir: 'dist/coverage'
        },
        port: 9876, // Note: web server port
        colors: true, // Note: enable / disable colors in the output (reporters and logs)
        logLevel: config.LOG_INFO,  // LOG_DEBUG for greater detail
        autoWatch: false,
        captureTimeout: 60000, // Note: If browser does not capture in given timeout [ms], kill it
        singleRun: false
    });
};
