const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
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
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
});
//update a record
router.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a new workout" });
});

module.exports = router;
