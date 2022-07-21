const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
//get all workourqts
router.get("/", getWorkouts);
//get a single workout
//
router.get("/:id", getWorkout);
//Post a new workout
router.post("/", createWorkout);

//delete a word
router.delete("/:id", deleteWorkout);
//update a record
router.patch("/:id", updateWorkout);

module.exports = router;
