const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Import model
const Reservation = require("../../models/Reservation");

// @route  POST api/reservations
// @desc   POST create new reservation
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newReservation = new Reservation({
      guide: req.body.guide,
      tourID: req.body.tourID,
      tourImage: req.body.tourImage,
      title: req.body.title,
      place: req.body.place,
      duration: req.body.duration,
      people: req.body.people,
      description: req.body.description,
      user: req.user.id,
      selectedDate: req.body.selectedDate
    });
    newReservation.save().then(post => res.json(post));
  }
);

// @route  GET api/reservations
// @desc   GET get all my reservations
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reservation.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(reservations => res.json(reservations))
      .catch(err =>
        res.status(404).json({ noreservationsfound: "no reservations found" })
      );
  }
);

// @route  GET api/reservations/guide
// @desc   GET get all my reservations
// @access Private
router.get(
  "/guide",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reservation.find({ guide: req.user.id })
      .sort({ date: -1 })
      .then(reservations => res.json(reservations))
      .catch(err =>
        res.status(404).json({ noreservationsfound: "no reservations found" })
      );
  }
);

// @route  delete api/reservations/:tour_id
// @desc   POST create & update user profile
// @access Private
router.delete(
  "/:tour_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reservation.findOneAndDelete({
      tourID: req.params.tour_id,
      user: req.user.id
    })
      .then(reservation => res.json({ succes: "true" }))
      .catch(err => res.json({ error: "error" }));
  }
);

module.exports = router;
