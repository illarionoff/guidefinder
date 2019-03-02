const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Import model
const Tour = require("../../models/Tour");
// const Profile = require("../../models/Profile");

// @route  GET api/guides/test
// @desc   Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Tours works" }));

// @route  GET api/tours/mytours
// @desc   GET get all posts
// @access Public

router.get(
  "/mytours",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tour.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(tours => res.json(tours))
      .catch(err => res.status(404).json({ notoursfound: "no tours found" }));
  }
);

// @route  POST api/tours
// @desc   POST create new tour
// @access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check validation
    const newTour = new Tour({
      title: req.body.title,
      place: req.body.place,
      duration: req.body.duration,
      people: req.body.people,
      description: req.body.description,
      user: req.user.id
    });
    newTour.save().then(post => res.json(post));
  }
);
module.exports = router;

// @route  POST api/tours
// @desc   POST create & update user profile
// @access Private
router.post(
  "/:tour_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const tourFields = {};
    tourFields.title = req.body.title;
    tourFields.place = req.body.place;
    tourFields.duration = req.body.duration;
    tourFields.people = req.body.people;
    tourFields.description = req.body.description;

    Tour.findOneAndUpdate(
      { _id: req.params.tour_id, user: req.user.id },
      { $set: tourFields },
      { new: true }
    ).then(tour => {
      if (tour) {
        res.json(tour);
      } else {
        res.json({ notauthorized: "you are not authorized" });
      }
    });
  }
);

// @route  delete api/tours/:tour_id
// @desc   POST create & update user profile
// @access Private
router.delete(
  "/:tour_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tour.findOneAndDelete({ _id: req.params.tour_id, user: req.user.id })
      .then(tour => res.json({ succes: "true" }))
      .catch(err => res.json({ error: "error" }));
  }
);
