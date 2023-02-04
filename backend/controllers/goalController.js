const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   Get /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.json({ msg: "Get goals" });
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.json({ msg: "Set goals" });
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ msg: "Updated goals" });
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ msg: "Deleted goals" });
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
