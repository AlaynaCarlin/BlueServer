const Sequelize = require('sequelize'); //! just for my testing


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

module.exports = sequelize;