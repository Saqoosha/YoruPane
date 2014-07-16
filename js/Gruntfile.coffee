module.exports = (grunt) ->

  grunt.initConfig

    browserify:
      'out/main.js': 'src/main.coffee'
      options:
        transform: ['coffeeify']
        extension: ['.coffee', '.js']

    uglify:
      'out/main.js': 'out/main.js'

    copy:
      '../bin/main.js': 'out/main.js'

    watch:
      coffee:
        files: ['src/**/*.coffee']
        tasks: ['browserify', 'uglify', 'copy']

    connect:
      server:
        options:
          base: '../bin'
          hostname: '*'

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['connect', 'browserify', 'uglify', 'copy', 'watch'])
