const ProductController = require('../../controllers/product')
const Product = require('../../models').Product

describe('ProductController', () => { 
    let req = {
        decoded: {
            id: 1
        }
    }
    let res = jest.fn()
    let next = jest.fn()
    describe('static create', () => { 
        test('controller has static create', () => { 
            expect(typeof ProductController.create).toBe('function')
         })
     })
     describe('static create will call Product.create', () => { 
        req.body = {
                brand: 'test',
                tag: 'test',
                price: 10,
                stock: 5,
                image_url: 'test'
            
        }
        
        jest.spyOn(Product, 'create').mockResolvedValueOnce({})
        ProductController.create(req,res,next)
        expect(Product.create).toHaveBeenCalled()
      })

      describe('static read all', () => { 
        test('controller has static readAll', () => { 
            expect(typeof ProductController.readAll).toBe('function')
         })
         test('static readAll will call Product.findAll', () => { 
            jest.spyOn(Product, 'findAll').mockResolvedValueOnce({})

            ProductController.readAll(req,res,next)
            expect(Product.findAll).toHaveBeenCalled()
          })
       })

       describe('static readOne', () => { 
        test('controller has static readOne', () => { 
            expect(typeof ProductController.readOne).toBe('function')
         })
         test('static readOne will call Product.findAll', () => { 
            req.params = {}
            req.params.id = 1
            jest.spyOn(Product, 'findByPk').mockResolvedValueOnce({})

            ProductController.readOne(req,res,next)
            expect(Product.findByPk).toHaveBeenCalled()
          })
       })
       describe('static update', () => { 
        test('controller has static update', () => { 
            expect(typeof ProductController.update).toBe('function')
         })
         test('static update will call Product.update', () => { 
            req.params ={
                id: 1
            }
            jest.spyOn(Product, 'update').mockResolvedValueOnce({})

            ProductController.update(req,res,next)
            expect(Product.update).toHaveBeenCalled()
          })
        })
        describe('static delete', () => { 
            test('controller has static delete', () => { 
                expect(typeof ProductController.delete).toBe('function')
             })
             test('static delete will call Product.destroy', () => { 
                req.params ={
                    id: 1
                }
                jest.spyOn(Product, 'destroy').mockResolvedValueOnce({})
    
                ProductController.delete(req,res,next)
                expect(Product.destroy).toHaveBeenCalled()
              })
         })

      
 })