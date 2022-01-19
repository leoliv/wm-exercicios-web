const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

}

// método fim para fazer os testes
function fim(cb) {
    console.log('Fim!!!');
    return cb()
}

exports.default = series(transformacaoJS, fim) 
// series => só vai chamar o fim depois que executar o transformacaoJS
// parallel => vai primeiro terminar o fim, porque o transformacaoJS demora mais (nem sempre a task que vc quer terminar primeiro vai terminar, porque ele vai paralelizar)

// comments false vai dizer pra não pegar arquivos de comentarios
// presets ['env'] vai pegar tudo o que é de mais moderno no javascript
// uglify (não precisa passar parametro nenhum), vai pegar todo o código e vai converter pra ser mimificado.
// você pode add uma função do tipo on (quando acontecer um determinado evento ele captura)
// concat vai pegar todos os arquivos selecionados (transpilados), usando babel, na versão mais atual pra versão mais conpatível, que já fez o processo de enfreiamento (pegar o código e jogar para uma linha só), esse resultado será concatenado.
// gulp.dest => vai dizer a pasta de destino
// Em vez de retornar uma callback, pode ser também retornado diretamente o resultado do workflow.
