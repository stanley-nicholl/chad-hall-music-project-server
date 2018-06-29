const controller = require('./controller')('auth')
const { authModel, userModel, tokenModel } = require('../models')
const bcrypt = require('bcryptjs')

class authController extends Controller {

}

module.exports = authController