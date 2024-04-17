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
                res.status(403).json({err: 'Access forbidden'})
            }
        })
    } catch (error) {
        res.status(403).json({err: 'Access forbidden'})
    }
}

module.exports = { authorization }