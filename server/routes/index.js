const Router = require('express')
const router = new Router()
const CarBrandsRouter = require('./CarBrandsRouter')
const CarModelsRouter = require('./CarModelsRouter')
const UsersRouter = require('./UsersRouter')
const JwtTokensRouter = require('./JwtTokensRouter')
const TypeOfProductRouter = require('./TypeOfProductRouter')
const ProductsRouter = require('./ProductsRouter')
const HistoryOfOrdersRouter = require('./HistoryOfOrdersRouter')


router.use('/Users',UsersRouter)
router.use('/JwtTokens',JwtTokensRouter)
router.use('/CarBrands',CarBrandsRouter)
router.use('/CarModels', CarModelsRouter)
router.use('/TypeOfProducts',TypeOfProductRouter)
router.use('/Products', ProductsRouter)
router.use('/HistoryOfOrders', HistoryOfOrdersRouter)

module.exports = router