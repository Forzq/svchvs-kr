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
    
        async getAll(req, res, next) {
            try {
                const userId = req.user.id; // Берем ID из токена
                const histories = await HistoryOfOrders.findAll({
                    where: { UserId: userId },
                });
    
                return res.json(histories);
            } catch (error) {
                next(ApiError.internal('Не удалось получить записи'));
            }
        }

    async getOne(req, res) {//немного бессмыслено 
        const {id} = req.params
        const history = await HistoryOfOrders.findOne({where:{id}})
        return res.json(history)
    }
}

module.exports = new HistoryOfOrdersController()