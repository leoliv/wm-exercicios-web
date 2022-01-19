const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)

// TUTORIAIS
// Já que o arquivo index.scss tem os imports dos outros arquivos, vamos mexer apenas com esse
// o pipe chama o sass como executavel e o método on para pegar o evento error, passando sass.logError como referencia para caso aconteça o erro
// o primeiro pipe vai pegar todo o sass e converter para css
// O segundo pipe vai colocar em apenas uma linha e o uglifyComments true para não incluir comentários
// O terceiro pipe vai concatenar em um arquivo só chamado estilo.min.css
// Para finalizar, no quarto pipe ele vai enviar para a pasta de destino
