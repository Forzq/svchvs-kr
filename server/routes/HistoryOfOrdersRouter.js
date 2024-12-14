const Router = require('express');
const router = new Router();
const HistoryOfOrdersController = require('../controllers/HistoryOfOrdersController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, HistoryOfOrdersController.create);
router.get('/', authMiddleware, HistoryOfOrdersController.getAll); // Применяем middleware
router.get('/:id', authMiddleware, HistoryOfOrdersController.getOne);

module.exports = router;
