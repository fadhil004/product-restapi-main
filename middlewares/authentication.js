const { verifyToken } = require("../helpers/jwt")

const authentication = (req, res, next) => {
    try {
        let token = req.headers.token
        let decode = verifyToken(token)
        req.decoded = decode
        next()
    } catch (err) {
        res.status(401).json({err: 'You should login first!'})
    }
}

module.exports = { authentication }