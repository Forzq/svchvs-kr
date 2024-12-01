const Router = require('express')
const router = new Router()
const CarBrandsController = require('../controllers/CarBrandsController')

router.post('/', CarBrandsController.create)
router.get('/', CarBrandsController.getALL)
router.get('/:id', CarBrandsController.getOne)

module.exports = router