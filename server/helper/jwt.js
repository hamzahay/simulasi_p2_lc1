const jwt = require('jsonwebtoken')
SECRET_KEY = 'mySecret'

function generateToken (payload) {
  let token = jwt.sign(payload, SECRET_KEY)
  return token
}

function verifyToken (token) {
  let payload = jwt.verify(token, SECRET_KEY)
  return payload
}

module.exports = { generateToken, verifyToken }