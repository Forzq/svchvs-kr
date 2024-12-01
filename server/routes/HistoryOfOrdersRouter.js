const Router = require('express')
const router = new Router()
const HistoryOfOrdersController = require('../controllers/HistoryOfOrdersController')

router.post('/', HistoryOfOrdersController.create)
router.get('/', HistoryOfOrdersController.getALL)
router.get('/:id', HistoryOfOrdersController.getOne)

module.exports = router