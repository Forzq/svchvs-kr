const {TypeOfProduct} = require('../models/models')
const ApiError = require('../error/ApiError')
class TypeOfProductController{
    async create (req, res){
        const {name} = req.body
        const type = await TypeOfProduct.create({name})
        return res.json(type)
    }

    async getALL(req, res) {
        const types = await TypeOfProduct.findAll()
        return res.json(types)
    }

    async getOne(req, res) {
        const {id} = req.params
        const type = await TypeOfProduct.findOne({where:{id}})
        return res.json(type)
    }
}

module.exports = new TypeOfProductController()