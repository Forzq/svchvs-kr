const {CarModels} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
class CarModelsController{
    async create (req, res, next){
        try
        {
        const {name, engineCapacity, age, CarBrandId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const model = await CarModels.create ({name, engineCapacity, age, CarBrandId, img: fileName})
        return res.json(model)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getALL(req, res) {
        const models = await CarModels.findAll()
        return res.json(models)
    }

    async getOne(req, res) {
        const {id} = req.params
        const model = await CarModels.findOne({where:{id}})
        return res.json(model)
    }
}

module.exports = new CarModelsController()