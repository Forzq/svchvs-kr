const Router = require('express')
const router = new Router()
const CarModelsController = require('../controllers/CarModelsController')

router.post('/', CarModelsController.create)
router.get('/', CarModelsController.getALL)
router.get('/:id', CarModelsController.getOne)

module.exports = router