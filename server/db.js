const {Sequalize} = require('sequelize')
module.exports = new Sequalize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        host: process.env.DB_PORT
    }
)