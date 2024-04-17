var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

module.exports = { hashPassword }