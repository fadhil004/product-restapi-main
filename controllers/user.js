const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

const User = require('../models').user

class UserController{

        static create(req, res, next) {
            const { email, password} = req.body
            User.create({
                email,
                password
            })
            .then(user => {
                res.status(201).json({user: user})
            })
            .catch(next)
        }

        static login(req, res, next) {
            const { email, password } = req.body
            User.findOne({
                where: {
                    email,
                }
            })
            .then(user => {
                if (comparePassword(password, user.password)){
                    let payload = {
                        id: user.id,
                        email: user.email
                    }
                    let token = generateToken(payload)
                    res.status(200).json({id: user.id, email: user.email, token}) //usahakan tidak lempar password utk keamanan
                } else {
                    next({message: 'invalid email/password', status: 401})
                }
            }) 
            .catch(next)
        }
}

module.exports = UserController