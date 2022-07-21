const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();
//get all workourqts
router.get("/", (req, res) => {
  res.json({ mssg: "smells like ys sisters" });
  //get a single workout
  //
  router.get("/:id", (req, res) => {
    res.json({ mssg: "Get a single workout" });
  });
  //Post a new workout
  router.post("/", async (req, res) => {
    const { title, load, reps } = req.body;

    try {
      const workout = await Workout.create({
        title,
        load,
        reps,
      });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  //delete a word
  router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE a new workout" });
  });
  //update a record
  router.patch("/:id", (req, res) => {
    res.json({ mssg: "PATCH a new workout" });
  });
});

module.exports = router;
