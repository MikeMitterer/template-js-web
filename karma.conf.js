const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],

        files: [
            { pattern: 'src/test/**/*_test.js' }
        ],

        preprocessors: {
            'src/test/**/*_test.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: false,
            stats: {
                chunks: true,
            },
        },
        reporters: ['progress'],
        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['ChromeHeadless']
    });
};