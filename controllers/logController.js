
// const { query } = require('express');
const Express = require('express');
// const { formatNamedParameters } = require('sequelize/dist/lib/utils');
const router = Express.Router();
// const { where } = require('sequelize/where');
const { LogModel } = require('../models');

//* PRACTICE ***
// router.get('/practice', (req, res) => {
//     res.send('Hey, This is the practice route!!')
// });

//* POST ***
router.post("/create", validateJWT, async (req, res) => {

    let { what, where, calories, category, date, photo, feelings } = req.body.log;

    try {
        const NewLog = await LogModel.create({
            what,
            where,
            calories,
            category,
            date,
            photo,
            feelings
        });

        res.status(201).json({
            message: "Log successfully created",
            message: { NewLog }
        })
    } catch (err) {
        res.status(500).json({
            message: "Unable to Log Meal",
            message: { err }
        });
    }
}
);

// Ben - Update
router.put("/update/:id", validateJWT, async (req, res) => {

    const { food, location, calorieNumber, mealType, date, photo, feeling } = req.body.log;
    const logId = req.params.id;
    const {id} = req.user;

    const query = {
        where: {
            id: logId,
            owner: id
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
        const update = await logModel.update(updatedLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

//* DELETE ***
// ! still needs validate
// router.delete("/delete/:id", async (req, res) => {
//     const ownerId = req.user.id;
//     const logId = req.params.id;

//     try {
//         const query = {
//             where:{
//                 id: logId,
//                 owner: ownerId
//             }
//         };

//         await LogModel.destroy(query);
//         res.status(200).json({ message: 'Log deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

//* GET ***
router.get("/date", async (req, res) => { // :date is dynamic and a big security risk. This creates a route that pulls everything from the database for people to see. Use /date
    const logDate = req.params.date; 
    const from = req.params.from; // from is the start date
    const to = req.params.to; // to is the end date
    console.log(req, 'req.params');
    try {
        const results = LogModel.findAll({
            where: {
                date: {
                    $between: [from, to]    // $between is a sequelize method that is used to find all the dates between the two dates
                }
            }
        });

        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// router.get("/mine/:week", async (req, res) => {
//     const { week } = req.params;
//     try {
//         const results = await LogModel.findAll({
//             where: { date: week }
//         });
//         res.status(200).json(results);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

// router.get("/mine/:month", async (req, res) => {
//     const { month } = req.params;
//     try {
//         const results = await LogModel.findAll({
//             where: { date: month }
//         });
//         res.status(200).json(results);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

module.exports = router;



