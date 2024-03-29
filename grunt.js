/**
 * Grunt task management configuration.
 */
module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      files: ['src/coffee/**/*.coffee', 'specs/coffee/**/*.coffee'],
      tasks: 'stylus coffeelint coffee eco_amd'
    },
    server: {
      port: 8001,
      base: './htdocs'
    },
    stylus: {
      app: {
        src : ['src/stylus/*.styl'],
        dest: 'htdocs/css/style.css'
      }
    },
    coffeelint: {
      files: ['src/coffee/**/*.coffee']
    },
    coffee: {
      compile: {
        files: {
          'htdocs/js/*.js': ['src/coffee/**/*.coffee']
          //'js/*.js': ['specs/coffee/**/*.coffee']
        },
        options: {
          bare:true,
          basePath: '/src/coffee'
        }
      },
      compileTest: {
        files: {
          'specs/js/*.js': ['specs/coffee/**/*.coffee']
        },
        options: {
          bare:true
          //basePath: '/src/coffee'
        }
      }
    },
    eco_amd: {
      compile: {
        files: {
          'htdocs/js/tmpl/*.js':'src/coffee/tmpl/**/*.eco'
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

  grunt.loadNpmTasks('grunt-eco-amd');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jasmine-runner');
/*   grunt.registerTask('default', 'coffeelint coffee'); */
  grunt.registerTask('first', 'coffeelint coffee copy');
  grunt.registerTask('default', 'stylus coffeelint coffee eco_amd requirejs');
};
