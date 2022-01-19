const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}

// CONFIGURING THE SERVER
// 1. gulp.src('build') => It will monitor the build folder, the folder used on the server.
// 2. pipe(webserver...) => Server settings.
// 3. port: 8080 => The server will run on port 8080.
// 4. open: true => Whether to open the browser or not
// 5. livereload: true => It will automatically load the browser.

// MONITORING THE FILES.
// 1. watch('src/**/*.html', => monitorar a pasta do código fonte.
// 2. () => gulp.series('appHTML')()) => Essa função vai disparar e chamar uma task do gulp.
// EM APP.js precisa definir as tasks
// 1. gulp.task('appHTML', appHTML)
