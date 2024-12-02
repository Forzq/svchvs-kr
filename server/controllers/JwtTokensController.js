const {JwtTokens} = require('../models/models')
const ApiError = require('../error/ApiError')
class JwtTokensController{
    async create (req, res){
        const {name} = req.body
        const da = await JwtTokens.create({name})
        return res.json(da)
    }

    async getALL(req, res) {
        const das = await JwtTokens.findAll()
        return res.json(das)
    }

    async getOne(req, res) {
        
    }
}

module.exports = new JwtTokensController()