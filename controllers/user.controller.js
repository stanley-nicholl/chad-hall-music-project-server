const Controller = require('./controller')('user')
const { userModel, tokenModel, authModel } = require('../models')

class userController extends Controller {

    static showOneFromToken(req, res, next) {
        //validate and decode token
        tokenModel.verifyAndExtractHeaderToken(req.headers)
        .catch(err => { throw new Error('invalid Token') })
        //check for and retrieve user from database
        .then(token => userModel.find(token.sub.id))
        .then(result => {
            if (!result) throw new Error('No such User')
            return res.status(200).json({ User: result })
        })
        .catch(next)
    }

    static createAdmin(req, res, next) {
        //user to provide an id for the new user that will be converted to admin
        authModel.createAdmin(req.id)
        .then(response => res.status(200).json({ [name]: response }))
        .catch(next)
    }

    static removeAdmin(req, res, next) {
        //user to provide an id for the admin to be removed
        authModel.removeAdmin(req.id)
        .then(reponse => res.status(200).json({ [name]: reponse }))
        .catch(next)
    }

}

module.exports = userController