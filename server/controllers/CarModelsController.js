const {CarModels} = require('../models/models')
const ApiError = require('../error/ApiError')
class CarModelsController{
    async create (req, res){
        const {name, engineCapacity, age} = req.body
        
    }

    async getALL(req, res) {

    }

    async getOne(req, res) {
        
    }
}

module.exports = new CarModelsController()