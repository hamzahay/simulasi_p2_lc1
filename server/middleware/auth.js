const { User } = require('../models')
const { verifyToken } = require('../helper/jwt')

async function authenticate (req, res, next) {
  try {
    if (req.headers.access_token) {
      let { id } = verifyToken(req.headers.access_token)
      let user = await User.findByPk(id)
      if (user) {
        req.headers.UserId = user.id
        next()
      }
    } else {
      throw ({ name: 403, message: 'please login first' })
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { authenticate }