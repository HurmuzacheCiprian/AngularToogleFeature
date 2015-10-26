module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.initConfig({
        wiredep: {
            task: {
                src: ['app/index.html']
            }
        },
        watch: {
            files: ['lib/bower_components/*'],
            tasks: ['wiredep']
        },
        concat: {
            dist: {
                src: ['app/project.js'],
                dest: 'app/app.js',
            }
        },

        html2js: {
            dist: {
                src: [ 'app/templates/*.html' ],
                dest: 'app/templates.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [ 'app/**/*.js' ],
                dest: 'app/app.js'
            }
        }

    });

    grunt.registerTask('default', ['wiredep','concat','html2js']);
    grunt.registerTask('changes', ['watch']);
};;