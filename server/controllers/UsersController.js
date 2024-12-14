const ApiError = require('../error/ApiError')
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Users, HistoryOfOrders} = require('../models/models')

const generateJwt = (id, email, role) => {
   return jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UsersController{
    async registration (req, res){
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный ввод'))
        }
        const candidate = await Users.findOne({where:{email}})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким емейл уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({email, role, password: hashPassword})
        // const history = await HistoryOfOrders.create({UserId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
    }

    async login(req, res) {
        const {email, password} = req.body
        const user = await Users.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Пароль неверный'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json(token)
        } catch (error) {
            next(error)
        }  
    }

    async getUser(req, res, next) {
        try {
            const userId = req.user.id; // ID пользователя, полученный из токена
            const user = await Users.findOne({
                where: { id: userId },
                attributes: ['id', 'email', 'role'], // Укажите нужные поля
            });
    
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'));
            }
    
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    
}

module.exports = new UsersController()