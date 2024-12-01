const Router = require('express')
const router = new Router()
const ProductsController = require('../controllers/ProductsController')

router.post('/', ProductsController.create)
router.get('/', ProductsController.getALL)
router.get('/:id', ProductsController.getOne)

module.exports = router