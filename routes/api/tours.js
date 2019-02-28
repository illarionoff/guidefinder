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
