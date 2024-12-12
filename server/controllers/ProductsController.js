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
        let { CarBrandsId, TypeOfProductId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let whereClause = {}; // Создаем пустой объект where

        if (TypeOfProductId) {
            whereClause.TypeOfProductId = TypeOfProductId; // Добавляем условие по TypeOfProductId
        }

        let includeClause = null; // Инициализируем include как null

        if (CarBrandsId) {
            includeClause = {
                model: CarModels,
                where: { CarBrandId: CarBrandsId },
                attributes: []
            };
        }


        const products = await Products.findAll({
            where: whereClause, // Используем whereClause
            include: includeClause, // Используем includeClause, если он определен
            limit, 
            offset
        });

        return res.json(products);
    }
    async getOne(req, res) {
        const {id} = req.params
        const product = await Products.findOne({where:{id}})
        return res.json(product)
    }
}

module.exports = new ProductsController();