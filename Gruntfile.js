'use strict';

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Use grunt-contrib-connect to launch a web server at port 9001
    // Inject the livereloadSnippet via middleware to update the files
    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },

    // Opens up the browser to the localhost along with the port defined above
    open: {
      dev: {
        path: 'http://127.0.0.1:<%= connect.livereload.options.port %>/'
      }
    },

    // Observe the js/html/css files for changes and execute the tasks
    regarde: {
      js: {
        files: ['**/*.js', '!**/node_modules/**'],
        tasks: ['jshint', 'uglify', 'livereload'],
      },
      html: {
        files: '**/*.html',
        tasks: ['livereload']
      },
      css: {
        files: '**/*.css',
        tasks: ['livereload']
      },
      scss: {
        files: '**/*.scss',
        tasks: ['sass', 'livereload']
      }
    },

    // Check for ghetto js in the plugin
    jshint: {
      files: ['jquery.photoset-grid.js']
    },

    // Minify the file and add a comment banner at the top with settings from package.json
    uglify: {
      options: {
        banner: '/**\n' +
          ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
          ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * <%= pkg.description %>\n' +
          ' * <%= pkg.repository.docs %>\n' +
          ' *\n' +
          ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' */\n'
      },
      dist: {
        files: {
          'jquery.photoset-grid.min.js': ['jquery.photoset-grid.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'nested'
        },
        files: {
          'css/main.css': ['css/scss/_normalize.scss', 'css/scss/_clearfix.scss', 'css/scss/main.scss']
        }
      }
    }


  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');

  // $ grunt
  // Checks the js and minifies it
  grunt.registerTask('default', ['jshint', 'uglify', 'sass']);
  // $ grunt server
  // Checks the js, minfies it, starts livereload, connects to a local server, opens the browser and watches for changes 
  grunt.registerTask('server', ['default', 'livereload-start', 'connect', 'open:dev', 'regarde']);

};