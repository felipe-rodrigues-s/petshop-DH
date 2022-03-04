const validaCadastro = (req, res, next) => {
  const {nome, preco, descricao} =  req.body

  if(!nome || nome.length < 3){
    return res.send({message:"o nome é obrigatorio e precisa ser maior que tres caracteres!"})
  };
  if(!preco || Number.isInteger(preco)){
    return res.send({message:"O preço é obrigatorio e precisa ser um número válido!"})
  };
  if(!descricao || descricao < 10){
    return res.send({message:"O descricao é obrigatório e precisa ter acima de 10 carateres!"})
  };

  next();
};

module.exports = validaCadastro