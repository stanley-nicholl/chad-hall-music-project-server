const db = require('../db/knex')
const Model = require('./model')

class authModel extends Model {

    static find(userId) {
        return db('auth')
        .where({ user_id: userId })
        .first()
    }

    static createAdmin(id) {
        return db('auth')
        .update({ admin: true })
        .where({ user_id: id })
        .returning('*')
    }

    static removeAdmin(id) {
        return db('auth')
        .update({ admin: false })
        .where({ user_id: id })
        .returning('*')
    }

}

module.exports = authModel