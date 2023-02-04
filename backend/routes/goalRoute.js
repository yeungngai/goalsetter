const express = require("express");
const router = express.Router();


const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Render, Create
router.route("/").get(getGoals).post(setGoal);

// Update, Delete
router.route("/:id").put(updateGoal).delete(deleteGoal);



module.exports = router;
