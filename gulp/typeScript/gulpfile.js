const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)

// no tsProject.src() => não precisa passar o caminho porque já foi passado na linha 4.
// .pipe(tsProject()) vai ser responsável por fazer o processo de compilação
// .pipe(gulp.dest('build')) => vai jogar para a pasta de destino
