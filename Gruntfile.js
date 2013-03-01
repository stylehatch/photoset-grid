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
      }
    },

    jshint: {
      files: ['jquery.photosetGrid.js']
    },

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
          'jquery.photosetGrid.min.js': ['jquery.photosetGrid.js']
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

  // Default task(s)
  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('server', ['livereload-start', 'connect', 'regarde']);

};