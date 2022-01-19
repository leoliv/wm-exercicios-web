const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

// aqui só vai ter um css de dependência

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}

// DEPSCSS
// 1. vai colocar o caminho da fonte
// 2. pipe uglifycss para minificar o arquivo e uglyComments: false para não tirar os comentários
// 3. pipe concat vai concatenar todos os arquivos font e vai renomear para deps.min.css
// 4. pipe gulp.dest vai jogar o arquivo para o caminho final

// DEPSFONTS
// 1. caminho da fonte
// 2. pipe gulp.dest copiar os arquivos para o caminho final
