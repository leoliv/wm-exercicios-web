const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
// se vinher algum formato de uma submit de um formulário, esse codigo vai ser responsavel a transformar em objeto.
// Nesse caso abaixo, vai ser pra qualquer requisição. Se não poderia colocar antes do bodyParser '/teste'
app.use(bodyParser.urlencoded({ extended: true }))
// se vinher um json dentro do body da requisição, esse vai ser o codigo que vai ser aplicado para transformar o json em objeto
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
// (req, res) => res.send('OK') => função miduer
// app.get('/teste', (req, res) => res.send('<h1>Exercício</h1>'))
// startar  servidor
app.listen(8080, () => console.log('Execultando...'))
