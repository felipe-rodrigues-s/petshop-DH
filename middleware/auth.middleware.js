const {check, validationResult, body} = require('express-validator')

const loggin = {
    validator:(check, validationResult, body)=> {
      check('nome').isLength({min:3}),
      check('email').isEmail(),
      check('senha').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1})
    }
}

module.exports = loggin