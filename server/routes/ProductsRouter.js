const Router = require('express')
const router = new Router()
const ProductsController = require('../controllers/ProductsController')

router.post('/', ProductsController.create)
 router.get('/', ProductsController.getALL)
router.get('/:id', ProductsController.getOne)
router.delete('/:id', ProductsController.delete)
router.put('/:id', ProductsController.update);

module.exports = router