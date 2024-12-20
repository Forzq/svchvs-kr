const {Products, CarModels} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductsController{
 
    async create(req, res, next) {
        try {
            console.log("Incoming request body:", req.body); // Логируем тело запроса
            const { name, horsepowerGain, torqueGain, description, cost, CarModelId, TypeOfProductId } = req.body;
            const product = await Products.create({
                name,
                horsepowerGain,
                torqueGain,
                description,
                cost,
                CarModelId,
                TypeOfProductId
            });
            console.log("Product created successfully:", product); // Логируем успешное создание
            return res.json(product);
        } catch (e) {
            console.error("Error creating product:", e.message); // Логируем ошибку
            next(ApiError.badRequest(e.message));
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
    async delete(req, res, next) {
        try {
            const { id } = req.params; // Извлекаем id из параметров запроса
            const product = await Products.destroy({ where: { id } }); // Удаляем продукт из базы
    
            if (product) {
                return res.json({ message: "Продукт успешно удален." });
            } else {
                return next(ApiError.badRequest("Продукт с указанным id не найден."));
            }
        } catch (e) {
            console.error("Ошибка при удалении продукта:", e.message); // Логируем ошибку
            next(ApiError.badRequest(e.message));
        }
    }
    async update(req, res, next) {
        try {
            console.log('Request params:', req.params);
            console.log('Request body:', req.body);
    
            const { id } = req.params;
            const {
                name,
                horsepowerGain,
                torqueGain,
                description,
                cost,
                CarModelId,
                TypeOfProductId,
            } = req.body;
    
            const product = await Products.findOne({ where: { id } });
    
            if (!product) {
                return next(ApiError.notFound('Продукт не найден.'));
            }
    
            product.name = name || product.name;
            product.horsepowerGain = horsepowerGain || product.horsepowerGain;
            product.torqueGain = torqueGain || product.torqueGain;
            product.description = description || product.description;
            product.cost = cost || product.cost;
            product.CarModelId = CarModelId || product.CarModelId;
            product.TypeOfProductId = TypeOfProductId || product.TypeOfProductId;
    
            await product.save();
            console.log('Updated product:', product);
    
            return res.json(product);
        } catch (e) {
            console.error('Error updating product:', e.message);
            next(ApiError.badRequest(e.message));
        }
    }
    
    
    
}

module.exports = new ProductsController();