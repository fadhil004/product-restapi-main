const jwt = require('jsonwebtoken');
const secret = 'private' //for educational purpose

const generateToken = (payload) => {
    return jwt.sign(payload, secret);
}

module.exports = { generateToken }