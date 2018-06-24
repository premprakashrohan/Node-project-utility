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
                tasks: ['ts']
            }
        }
    });
    //way to load npm task
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //registering task
    grunt.registerTask('default',['ts','watch']);

};