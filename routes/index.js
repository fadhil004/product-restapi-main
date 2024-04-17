const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/product')

router.post('/products', ProductController.create)
router.get('/products', ProductController.readAll)
router.get('/products/:id', ProductController.readOne)
router.patch('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)

module.exports = router