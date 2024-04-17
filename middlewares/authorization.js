const Product = require('../models').Product

const authorization = (req, res ,next) => {
    try {
        const userId = req.decoded.id
        const productId = req.params.id

        Product.findByPk(productId)
        .then(product => {
            if (product.userId === userId){
                next()
            } else {
                next({status: 403,message: 'Access forbidden'})
            }
        })
    } catch (error) {
        next({status: 403, message: 'Access forbidden'})
    }
}

module.exports = { authorization }