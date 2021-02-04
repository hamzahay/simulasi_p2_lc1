const bcrypt = require('bcrypt')
const saltRound = 10

function hashPass (password) {
  const salt = bcrypt.genSaltSync(saltRound)
  const hashedPass = bcrypt.hashSync(password, salt)
  return hashedPass
}

function comparePass (password, hashedPass) {
  const result = bcrypt.compareSync(password, hashedPass)
  return result
}

module.exports = { hashPass, comparePass }