const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/product')
const UserController = require('../controllers/user');
const { authentication } = require('../middlewares/authentication');
const { authorization } = require('../middlewares/authorization');

router.post('/register', UserController.create)
router.post('/login', UserController.login)

router.use(authentication)
router.post('/products', ProductController.create)
router.get('/products', ProductController.readAll)
router.get('/products/:id', ProductController.readOne)
router.patch('/products/:id', authorization, ProductController.update)
router.delete('/products/:id', authorization, ProductController.delete)

module.exports = router