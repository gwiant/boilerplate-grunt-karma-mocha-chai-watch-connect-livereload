/*global window,require*/
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\.test\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require(['/base/src/test/js/requireConfig.js'], function () {
    "use strict";
    require.config({
        // Karma serves files from '/base'
        baseUrl: '/base/src/assets/js',

        // ask Require.js to load these files (all our tests)
        deps: tests,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });
});