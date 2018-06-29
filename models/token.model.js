const { promisify } = require('util')
const { sign, verify } = require('jsonwebtoken')
const signPromise = promisify(sign)
const verifyPromise = promisify(verify)
const secret = process.env.SECRET_KEY

class token {

    static sign(id) {
        const sub = { id }
        const expiresIn = '100 days'
        return signPromise({ sub}, secret, { expiresIn })
    }

    static verifyAndExtractHeaderToken(header) {
        const token = header.authorization ? header.authorization.replace('Bearer ', '') : null
        return verifyPromise(token, secret)
    }
}

module.exports = token