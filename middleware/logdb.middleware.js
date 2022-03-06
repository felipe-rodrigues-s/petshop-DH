const fs = require('fs')

const logDB = (req, res, next)=>{
  fs.appendFileSync('./model/registro.logDB.txt', `
  Usuario ${req.body.email} entrou na url: ${req.url}`)


  next();
}
module.exports = logDB