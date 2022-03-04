const modelPets = require('../model/pets.json')

const petsController = {
  index:(req,res)=>{
    res.render('cadastroPets')
  },
  listaPets:(req,res)=>{
    console.log(res.send(modelPets));

  },
  cadastraPets:(req,res)=>{
    let pets = req.body
    modelPets.push(pets)
    res.send(modelPets)
  }
}
module.exports = petsController