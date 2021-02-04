const { User } = require('../models')
const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class UserController {

  static register (req, res, next) {
    let { email, password } = req.body
    User.create({ email, password })
      .then(user => {
        res.status(201).json({ id: user.id, email: user.email })
      })
      .catch(err => {
        console.log(err)
      })
  }

  static login (req, res, next) {
    let { email, password } = req.body
    User.findOne({ where: { email: email }})
      .then(user => {
        if (user && comparePass(password, user.password)) {
          let payload = {
            id: user.id,
            email: user.email,
          }
          let access_token = generateToken(payload)
          req.headers.access_token = access_token
          payload.access_token = access_token
          res.status(200).json(payload)
        } else {
          throw ({ name: 400, message: 'wrong username/password'})
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = UserController