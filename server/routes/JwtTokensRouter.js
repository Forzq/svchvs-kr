const Router = require('express')
const router = new Router()
const JwtTokensController = require('../controllers/JwtTokensController')
router.post('/', JwtTokensController.create)
router.get('/', JwtTokensController.getALL)
router.get('/:id', JwtTokensController.getOne)

module.exports = router