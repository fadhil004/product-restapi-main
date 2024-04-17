const Product = require('../models').Product;

class ProductController {

    static create(req, res) {
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
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }

    static readAll(req, res) {
        Product.findAll()
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }

    static readOne(req, res) {
        Product.findByPk(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }

    static update(req, res) {
        Product.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true //menampilkan objek
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }

    static delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
    }
}

module.exports = ProductController