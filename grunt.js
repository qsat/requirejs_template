/**
 * Grunt task management configuration.
 */
module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      files: ['coffee/**/*.coffee', 'specs/coffee/**/*.coffee'],
      tasks: 'coffeelint coffee'
    },
    coffeelint: {
      files: ['coffee/**/*.coffee']
    },
    coffee: {
      compile: {
        files: {
          'htdocs/js/*.js': ['coffee/**/*.coffee'],
          'specs/js/*.js': ['specs/coffee/**/*.coffee']
        },
        options: {
          bare:true,
          basePath: '/coffee'
        }
      }
    },
    copy: {
      target: {
        options: {
          cwd: 'htdocs/js/'
        },
        files: {
          'htdocs/js/lib/': ['lib/*']
        }
      }
    },
    requirejs: {
      dist: {
        almond  : true,
        optimize: 'none',
        baseUrl : 'htdocs/js',
        out     : 'htdocs/js/all.js',

        include: ['bootstrap'],

        paths: {},

        skipModuleInsertion       : false,
        optimizeAllPluginResources: true,
        findNestedDependencies    : true,

        mainConfigFile: ['htdocs/js/bootstrap.js'],
        replaceRequireScript: [{
          files: ['index.html'],
          modulePath: 'htdocs/js/all' // out path
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
/*   grunt.registerTask('default', 'coffeelint coffee'); */
  grunt.registerTask('first', 'coffeelint coffee copy');
  grunt.registerTask('default', 'coffeelint coffee requirejs');
};
