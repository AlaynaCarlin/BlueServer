const Sequelize = require('sequelize'); //! just for my testing

//Ben
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

module.exports = sequelize;