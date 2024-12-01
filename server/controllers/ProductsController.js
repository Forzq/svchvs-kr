const uuid = require('uuid')
const {Products} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
class ProductsController{
    async create (req, res, next){
        const {name, horsepowerGain, torqueGain, description, cost, CarModelId, TypeOfProductId} = req.body
        // const {img} = req.files
        // let fileName = uuid.v4 + ".jpg"
        // img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const product = await Products.create ({name, horsepowerGain, torqueGain, description, cost, CarModelId, TypeOfProductId})
        return res.json(product)
    }

    async getALL(req, res) {

    }

    async getOne(req, res) {
        
    }
}

module.exports = new ProductsController()