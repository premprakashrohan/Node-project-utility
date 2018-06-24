module.exports = function(grunt){
    grunt.initConfig({
        //Transpiling
        ts: {
            default: {
                src: ['*.ts','!node_modules/**']
            }
        },
        //linting
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: ["*.ts"]
            }
        }
    });
    //way to load npm task
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    //registering task
    grunt.registerTask('default',['ts','tslint']);

};