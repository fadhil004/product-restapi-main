const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

const User = require('../models').user

class UserController{

        static create(req, res) {
            const { email, password} = req.body
            User.create({
                email,
                password
            })
            .then(user => {
                res.status(201).json({user: user})
            })
            .catch(err => {
                res.status(400).json({err})
            })
        }

        static login(req, res) {
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
                    res.status(400).json({err: 'invalid email/password'})
                }
            }) 
            .catch(err => {
                res.status(400).json({err: 'invalid email/password'})
            })
        }
}

module.exports = UserController