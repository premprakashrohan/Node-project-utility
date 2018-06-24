module.exports = function(grunt){
    grunt.initConfig({
        //Transpiling
        ts: {
            default: {
                src: ['*.ts','!node_modules/**'],
                tsconfig: true
            }
        },
        watch: {
            scripts: {
                files: ['*.ts'],
                tasks: ['exec:jasmine','ts']
            }
        },
        exec: {
            jasmine: {
                command: 'jasmine spec/product-spec.js'
            }
        }
    });
    //way to load npm task
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-exec');
     //registering task
    grunt.registerTask('default',['exec:jasmine','ts','watch']);

};