const {CarBrands} = require('../models/models')
const ApiError = require('../error/ApiError')
class carBrandsController{
    async create (req, res, next){
        try
        {
        const {name} = req.body
        const brand = await CarBrands.create ({name})
        return res.json(brand)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getALL(req, res) {
        const brands = await CarBrands.findAll()
        return res.json(brands)
    }

    async getOne(req, res) {
        const {id} = req.params
        const brand = await CarBrands.findOne({where:{id}})
        return res.json(brand)
    }
}

module.exports = new carBrandsController()