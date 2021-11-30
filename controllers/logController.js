const Express = require('express');
const router = Express.Router();
const { where } = require('sequelize/location');
const { LogModel } = require('../models');

//* PRACTICE ***
router.get('/practice', (req, res) => {
    res.send('Hey, This is the practice route!!')
});

//* POST ***


//* UPDATE ***
// Update Code from Ben
router.put("/update/:id", async (req, res) => {
    const {updatedLog} = req.body.log;
    const id = req.params.id;

    const query = {
        where: {
            id: id,
            owner: req.user.id
        }
    };
//Comment
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
router.get("/mine/:date", async (req, res) => {
    const { date } = req.params;
    try {
        const results = await LogModel.findAll({
            where: { date: date }
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});




module.exports = router;



