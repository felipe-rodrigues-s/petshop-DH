const fs = require('fs')

const log = (req, res, next)=>{
  fs.appendFileSync('./model/registro.log.txt', `
  Usuario entrou na url: ${req.url}`)

  next();
}
module.exports = log