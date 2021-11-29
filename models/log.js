const { DataTypes } = require("sequelize");
const db = require("../db");

const foodLog = db.define("log", {
    what: {
        type: DataTypes.STRING,
        allowNull: false
    },
    where: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    feelings: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = foodLog;