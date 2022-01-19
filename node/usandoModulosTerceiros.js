// O lodash é para pegar o método random
const _ = require('lodash')
setInterval(() => console.log(_.random(50, 60)), 2000)
// O nodemon vai ficar monitorando cada mudança para dá um refresh em tempo real