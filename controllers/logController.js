const Express = require("express");
const router = Express.Router();
// const { where } = require("sequelize/location");
const { LogModel } = require("../models");

//* PRACTICE ***
router.get("/practice", (req, res) => {
  res.send("Hey, This is the practice route!!");
});

//* POST ***

//* UPDATE ***
// Update Code from Ben
router.put("/update/:id", async (req, res) => {
  const { updatedLog } = req.body.log;
  const id = req.params.id;

  const query = {
    where: {
      id: id,
      owner: req.user.id,
    },
  }; 
  //Comment
  const updated = {
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
