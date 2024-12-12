const Router = require('express')
const router = new Router()
const UsersController = require('../controllers/UsersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UsersController.registration)
router.post('/login', UsersController.login)
router.get('/auth', UsersController.check)

module.exports = router