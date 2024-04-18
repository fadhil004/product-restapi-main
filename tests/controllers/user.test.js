const UserController = require('../../controllers/user')
const User = require('../../models').user

describe('UserController', () => { 
    let req = {
        body: {
            email : 'dyl@mail.com',
            password: '123'
        }
    }
    let res = jest.fn()
    let next = jest.fn()

    describe('static create', () => { 
        test('controller has static create', () => { 
            expect(typeof UserController.create).toBe('function')
         })
         test('static create will call User.create', () => { 
            jest.spyOn(User, 'create').mockResolvedValueOnce({})

            UserController.create(req,res,next)
            expect(User.create).toHaveBeenCalled()
          })
     })
     describe('static login', () => { 
        test('controller has static login', () => { 
            expect(typeof UserController.login).toBe('function')
         })
         test('static login will call User.findOne', () => { 
            jest.spyOn(User, 'findOne').mockResolvedValueOnce({})

            UserController.login(req,res,next)
            expect(User.findOne).toHaveBeenCalled()
          })
      })
 })