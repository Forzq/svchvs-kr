const ApiError = require('../error/ApiError')
class UsersController{
    async registration (req, res){

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id){
            next(ApiError)
        }
        res.json(id)
    }
}

module.exports = new UsersController()