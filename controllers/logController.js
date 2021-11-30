let Express = require('express');
const { where } = require('sequelize/dist');
let router = Express.Router();
let validateJWT = require('../../middleware/validateJWT');
const { logModel } = require('../../models/log');

// Update Code from Ben

router.put("/update/:id", async (req, res) => {
    const {updatedLog} = req.body.log;
    const id = req.params.id;

    const query = {
        where: {
            id: id
        }
    };

    const updatedLog = {
        what: food,
        where: location,
        calories: calorieNumber,
        category: mealType,
        date: date,
        photo: photo,
        feeling: feeling,

    };

    try {
        const update = await log.update(updatedLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});