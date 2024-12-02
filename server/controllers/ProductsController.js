const {Products, CarModels} = require('../models/models')
const ApiError = require('../error/ApiError')
class ProductsController{
    async create (req, res, next){
        try
        {
        const {name, horsepowerGain, torqueGain, description, cost, CarModelId, TypeOfProductId} = req.body
        const product = await Products.create ({name, horsepowerGain, torqueGain, description, cost, CarModelId, TypeOfProductId})
        return res.json(product)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getALL(req, res) {
        let { CarBrandsId, TypeOfProductId, limit, page } = req.query; // Получаем CarBrandsId из query параметров
        let products;
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        if(TypeOfProductId){
            products = await Products.findAndCountAll({where:{TypeOfProductId}, limit, offset})
        }else 
        if (CarBrandsId) {
            // Запрашиваем продукты с фильтрацией через связи
            products = await Products.findAndCountAll({
                include: {
                    model: CarModels,
                    where: { CarBrandId: CarBrandsId }, // Указываем фильтр по CarBrandId
                    attributes: [] // Не включать данные CarModels в результат
                    
                },limit, offset
            });
        } else {
            // Если фильтра нет, возвращаем все продукты
            products = await Products.findAndCountAll(limit, offset);
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Products.findOne({where:{id}})
        return res.json(product)
    }
}

module.exports = new ProductsController()