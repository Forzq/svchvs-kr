const {HistoryOfOrders} = require('../models/models')
const ApiError = require('../error/ApiError')
class HistoryOfOrdersController{
    async create (req, res, next){
        try
        {
        const {ProductId, UserId} = req.body
        const history = await HistoryOfOrders.create ({ProductId, UserId})
        return res.json(history)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getALL(req, res) {
        const {UserId} = req.query;
        let histories;
        if(UserId){
            histories = await HistoryOfOrders.findAll({where:{UserId}})
        }else{
            histories = await HistoryOfOrders.findAll()
        }
        return res.json(histories)
    }

    async getOne(req, res) {
        const {id} = req.params
        const history = await HistoryOfOrders.findOne({where:{id}})
        return res.json(history)
    }
}

module.exports = new HistoryOfOrdersController()