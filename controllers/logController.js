let Express = require('express');
const { where } = require('sequelize/location');
let router = Express.Router();
let validateJWT = require('../../middleware/validateJWT');
const { logModel } = require('../../models/log');

//* PRACTICE ***
router.get('/practice', (req, res) => {
    res.send('Hey, This is the practice route!!')
});

//* POST ***

//* DELETE ***

//* GET ***



// Update Code from Ben
//* UPDATE ***
router.put("/update/:id", async (req, res) => {
    const {updatedLog} = req.body.log;
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

modules.export = router; 

