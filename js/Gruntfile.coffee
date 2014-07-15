module.exports = (grunt) ->

  grunt.initConfig

    browserify:
      'out/main.js': 'src/main.coffee'
      options:
        transform: ['coffeeify']
        extension: ['.coffee', '.js']

    watch:
      coffee:
        files: ['src/**/*.coffee']
        tasks: ['browserify', 'copy']

    copy:
      '../bin/main.js': 'out/main.js'

    connect:
      server:
        options:
          base: '../bin'
          hostname: '*'

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['connect', 'browserify', 'copy', 'watch'])
