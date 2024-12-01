const Router = require('express')
const router = new Router()
const TypeOfProductController = require('../controllers/TypeOfProductController')

router.post('/', TypeOfProductController.create)
router.get('/', TypeOfProductController.getALL)
router.get('/:id', TypeOfProductController.getOne)

module.exports = router