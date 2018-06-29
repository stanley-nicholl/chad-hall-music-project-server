const db = require('../db/knex')
const Model = require('./model')('music')

class userModel extends Model {

    static getUserIdByEmail (email) {
        return db('users')
        .select('id', 'first_name')
        .where({ email })
        .first()
    }
    
}

module.exports = userModel