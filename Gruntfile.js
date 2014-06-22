var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

/*global module*/
module.exports = function (grunt) {

    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.loadNpmTasks('grunt-contrib-connect');
    gruntConfig.connect = {
      options: {
        port: 3001,
        host: "localhost"
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              require('connect-livereload')(),
              mountFolder(connect, 'src')
            ];
          }
        }
      }
    };

    grunt.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.watch = {
      src: {
        files: ['Gruntfile.js', 'src/test/js/**/*.js', 'src/assets/**/*.js', 'src/**/*.html'],
        tasks: ['lint', 'cover'],
        options: {
          livereload: true,
        }
      }
    };

    // convenience
    grunt.registerTask('default', ['lint', 'cover', 'connect:livereload', 'watch']);
    grunt.registerTask('all', ['lint', 'cover']);

    // continuous integration
    grunt.registerTask('ci', ['lint', 'cover']);

    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        options: { jshintrc: ".jshintrc" },
        all: [
            'Gruntfile.js',
            'src/**/*.js',
            '!src/assets/lib/**/*',
            '!src/test/lib/**/*'
        ]
    };
    grunt.registerTask('lint', 'jshint');

    // coverage
    grunt.loadNpmTasks('grunt-karma');
    gruntConfig.karma = {
        test: {
            configFile: 'karma.conf.js',
            reporters: ['progress', 'junit'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        cover: {
            configFile: 'karma.conf.js',
            preprocessors: {
                'src/assets/js/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        chrome: {
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            browsers: ['Chrome'],
            autoWatch: true
        },
        firefox: {
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            browsers: ['Firefox'],
            autoWatch: true
        },
        safari: {
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            browsers: ['Safari'],
            autoWatch: true
        }
    };
    grunt.registerTask('test', ['karma:test']);
    grunt.registerTask('cover', ['karma:cover']);

    // grunt
    grunt.initConfig(gruntConfig);
};