const { authorization } = require('../../middlewares/authorization')
const Product = require('../../models').Product

describe('Authorization', () => { 
    test('authorization is a function', () => { 
        expect(typeof authorization).toBe('function')
     })
     test('authorization call Product.findByPk', () => { 
        let req = {
            params: {
                id: 1
            },
            decoded: {
                id: 2
            }
        }

        let res = jest.fn()
        let next = jest.fn()

        jest.spyOn(Product, 'findByPk').mockResolvedValueOnce({})

        authorization(req,res,next)
        expect(Product.findByPk).toHaveBeenCalled()
      })
 })