module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      mainJS: {
        options: {
          baseUrl: "public/js/",
          paths: {
            "desktop": "app/config/Init"
          },
          wrap: true,
          name: "libs/almond",
          preserveLicenseComments: false,
          optimize: "uglify",
          mainConfigFile: "public/js/app/config/Init.js",
          include: ["desktop"],
          out: "public/js/app/config/Init.min.js"
        }
      },
      mainCSS: {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/app.css",
          out: "./public/css/app.min.css"
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
      options: {
        camelcase: true,
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    },
    githooks: {
      all: {
        options: {
          template: 'hooks/pre-commit.js'
        },
        'pre-commit': 'test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['requirejs:mainJS', 'requirejs:mainCSS']);
  grunt.registerTask('default', ['githooks', 'test', 'build']);

};