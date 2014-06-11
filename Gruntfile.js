module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'stylesheets/app.css': 'sass/app.scss'
        }        
      }
    },

    uglify: {
      dist: {
        files: {
          'javascripts/vendor/modernizr.js': ['bower_components/modernizr/modernizr.js'],
          'javascripts/vendor/all.js': [
            'bower_components/jquery/jquery.js',
            'bower_components/foundation/js/foundation.js',
            'bower_components/retina.js/src/retina.js'
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass','uglify']);
  grunt.registerTask('default', ['build','watch']);
}