const Product = require('../models').Product;

class ProductController {

    static create(req, res, next) {
        const {brand, tag, price, stock, image_url} = req.body
        const userId = req.decoded.id
        Product.create({
            brand,
            tag,
            stock: Number(stock),
            price: Number(price),
            image_url,
            userId: userId
        })
        .then(product => {
            res.status(201).json(product)
        })
        .catch(next)
    }

    static readAll(req, res, next) {
        Product.findAll()
        .then(product => {
            res.status(200).json(product)
        })
        .catch(next)
    }

    static readOne(req, res, next) {
        Product.findByPk(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(next)
    }

    static update(req, res, next) {
        Product.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true //menampilkan objek
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }

    static delete(req, res, next) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }
}

module.exports = ProductController