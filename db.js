const Sequelize = require('sequelize'); //! just for my testing


//Alayna
// const sequelize = new Sequelize("postgres://postgres:4e252eccce7c4a18b1cb1fad4832dbc0@localhost:5432/BlueServer");

// //Renee
// const sequelize = new Sequelize("postgres://postgres:39ab1e617e64405bb9759a2e79db761c@localhost:5432/BlueServer");

//Ben
const sequelize = new Sequelize("postgres://postgres:2d2233dbb0e741cf9014e40264ac3f23@localhost:5432/BlueServer");

module.exports = sequelize;