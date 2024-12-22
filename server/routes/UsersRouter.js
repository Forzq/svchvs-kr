const Router = require('express')
const router = new Router()
const UsersController = require('../controllers/UsersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UsersController.registration)
router.post('/login', UsersController.login)
router.get('/auth', UsersController.check)//убран мидлвер от греха
router.get('/profile', authMiddleware, UsersController.getUser);
router.get('/',UsersController.getUsers);
module.exports = router