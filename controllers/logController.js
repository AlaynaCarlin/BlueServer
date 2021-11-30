const Express = require("express");
const router = Express.Router();
// const { where } = require('sequelize/location');
const { LogModel } = require('../models');

//* PRACTICE ***
// router.get('/practice', (req, res) => {
//     res.send('Hey, This is the practice route!!')
// });

//* POST ***
router.post("/register", async (req, res) => {

    let { what, where, calories, category, date, photo, feeling } = req.body.log;

// Ben - Update
router.put("/update/:id", async (req, res) => {
    const {food, location, calorieNumber, mealType, date, photo, feeling} = req.body.log;
    const id = req.params.id;

    const query = {
        where: {
            id: id,
            owner: req.user.id
        }
    };

    const updatedLog = {
        what: food,
        where: location,
        calories: calorieNumber,
        category: mealType,
        date: date,
        photo: photo,
        feelings: feeling,

    };

    try {
        const update = await log.update(updatedLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

//* DELETE ***

//* GET ***

module.exports = router;
