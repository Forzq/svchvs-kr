const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const Users = sequelize.define('Users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue:"USER"},
})

const JwtTokens = sequelize.define('JwtTokens', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CarBrands = sequelize.define('carBrands', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    country: {type: DataTypes.STRING, allowNull:true},
})

const CarModels = sequelize.define('carModels', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    engineCapacity: {type: DataTypes.INTEGER, allowNull:false},
    age:{type:DataTypes.INTEGER, allowNull:true}
})

const TypeOfProduct = sequelize.define('typeOfProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    horsepowerGain: {type: DataTypes.INTEGER, allowNull:true},
    torqueGain: {type: DataTypes.INTEGER, allowNull:true},
    description: {type: DataTypes.STRING, allowNull:true},
    cost: {type: DataTypes.INTEGER, allowNull:false},
})

const HistoryOfOrders = sequelize.define('historyOfOrders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, unique:true, allowNull:false},
})


Users.hasOne(JwtTokens)
JwtTokens.belongsTo(Users)

HistoryOfOrders.hasMany(Users)
Users.belongsTo(HistoryOfOrders)

CarBrands.hasMany(CarModels)
CarModels.belongsTo(CarBrands)

CarModels.hasMany(Products)
Products.belongsTo(CarModels)

TypeOfProduct.hasMany(Products)
Products.belongsTo(TypeOfProduct)

Products.hasMany(HistoryOfOrders)
HistoryOfOrders.belongsTo(Products)

module.exports = {
    Users,
    JwtTokens,
    CarBrands,
    CarModels,
    TypeOfProduct,
    Products,
    HistoryOfOrders
}