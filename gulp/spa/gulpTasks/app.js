const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}

// APPHTML
// 1. gulp.src => selecionar os arquivos para modificação
// 2. .pipe(htmlmin) minificar arquivos html e collapseWhitespace true para tirar os espaços em branco
// 3. gulp.dest => copiar para a pasta de destino

// APPCSS
// 1. gulp.src => selecionar os arquivos para modificação
// 2. .pipe(sass...) => para chamar o evento casa pegue um Error
// 3. pipe(uglifycss...) minificar e tirar os comentários do arquivo final
// 4. pipe(concat...) concatenar todos os arquivos em um só
// 5. pipe(gulp.dest...) jogar na pasta de destino

// APPJS
// 1. gulp.src => selecionar os arquivos para modificação
// 2. pipe(babel...) vai converter o código para a versão mais antiga do browser. presets: ['env'] vai colocar a versão atual do EcmaScript
// 3. pipe(uglify()) => vai minificar
// 4. pipe(concat('app.min.js')) => vai concatenar
// 5. pipe(gulp.dest...) jogar na pasta de destino

// APPIMG
// 1. gulp.src => selecionar os arquivos para modificação
// 2. pipe(gulp.dest...) jogar na pasta de destino
