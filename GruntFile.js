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
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.registerTask('default',['ts','tslint']);

};