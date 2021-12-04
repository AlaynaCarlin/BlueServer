const Express = require('express');
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { LogModel } = require("../models");


//* PRACTICE ***
router.get("/practice", validateJWT, (req, res) => {
  res.send("Hey, This is the practice route!!");
});

//* POST ***
router.post("/create", validateJWT, async (req, res) => {
    const { id } = req.user;
    
    const { what, where, calories, category, date, photo, feelings } = req.body.log;
    const NewLog = {
            what,
            where,
            calories,
            category,
            date,
            photo,
            feelings,
            owner: id
        };
    try {
       const mealLog = await LogModel.create(NewLog);
       res.status(200).json({
           message: `log created`,
           log: mealLog 
       });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
);

// Ben - Update
router.put("/update/:id", validateJWT, async (req, res) => {
    const { what, where, calories, category, date, photo, feelings } = req.body.log;// **these need to match our request**
    const logId = req.params.id;
    const {id} = req.user;
    // console.log(id);
    // console.log(req.params, 'req.params');

    const query = {
        where: {
            id: logId,
            owner: id
        }
    };

    const updatedLog = {
        what: what,
        where: where,
        calories: calories,
        category: category,
        date: date,
        photo: photo,
        feelings: feelings,
        // owner: id

    };
    console.log(updatedLog);

    try {
        const update = await LogModel.update(updatedLog, query);
        res.status(200).json({
            message: `${update} Logs successfully updated!`,
            update: updatedLog,
            query: query
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

//* DELETE ***
// ! still needs validate
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const logId = req.params.id;

    try {
        const query = {
            where:{
                id: logId,
                owner: ownerId
            }
        };

        await LogModel.destroy(query);
        res.status(200).json({ message: 'Log deleted' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//* GET ***
router.get('/mine', validateJWT, async (req, res) => {
    const { id } = req.user;
    try{
        const logs = await LogModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;



