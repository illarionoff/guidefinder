const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");

// Multer config
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Wrong file type"));
  }
}
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});

// Import model
const Tour = require("../../models/Tour");
// const Profile = require("../../models/Profile");

// @route  GET api/guides/test
// @desc   Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Tours works" }));

// @route  GET api/tours/mytours
// @desc   GET get all my tours
// @access Private

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

// @route GET api/tours/:id
// @desc GET tour by ID
// @access Private
router.get(
  "/:tour_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tour.findById(req.params.tour_id)
      .then(tour => res.json(tour))
      .catch(err => res.status(404).json({ notoursfound: "no tours found" }));
  }
);

// @route  POST api/tours
// @desc   POST create new tour
// @access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("tourImage"),
  (req, res) => {
    const newTour = new Tour({
      title: req.body.title,
      place: req.body.place,
      duration: req.body.duration,
      people: req.body.people,
      description: req.body.description,
      tourImage: req.file.path,
      user: req.user.id
    });
    newTour.save().then(post => res.json(post));
  }
);

// @route  POST api/tours/:tour_id
// @desc   POST update tour
// @access Private
router.post(
  "/:tour_id",
  passport.authenticate("jwt", { session: false }),
  upload.single("tourImage"),
  (req, res) => {
    const tourFields = {};
    tourFields.title = req.body.title;
    tourFields.place = req.body.place;
    tourFields.duration = req.body.duration;
    tourFields.people = req.body.people;
    tourFields.description = req.body.description;
    if (tourFields.tourImage) {
      tourFields.tourImage = req.file.path;
    }

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

module.exports = router;
