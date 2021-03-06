const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Guide model
const Guest = require("../../models/Guest");
const Tour = require("../../models/Tour");

// Bring SecretOrKey from config
const keys = require("../../config/keys");

// Validation
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

// @route  POST api/guests/register
// @desc   Register guest
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Guest.findOne({ email: req.body.email }).then(guest => {
    if (guest) {
      return res.status(400).json({ email: "Email exists" });
    } else {
      //   Create new Guide
      const newGuest = new Guest({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newGuest.password, salt, (err, hash) => {
          if (err) throw err;
          newGuest.password = hash;
          newGuest
            .save()
            .then(guest => res.json(guest))
            .catch(err => console.log({ err }));
        });
      });
    }
  });
});

// @route  POST api/guests/login
// @desc   Login User / Return JWT Token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Guest.findOne({ email }).then(guest => {
    // Check for user
    if (!guest) {
      return res.status(404).json({ email: "Email doesn't exist" });
    }

    // Check Password
    bcrypt
      .compare(password, guest.password)
      .then(isMatch => {
        if (isMatch) {
          // User Matched
          // Create JWT payload
          const payload = {
            id: guest._id,
            name: guest.name,
            status: "guest"
          };
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res.status(400).json({ password: "Password is incorrect" });
        }
      })
      .catch();
  });
});

// @route  GET api/guests/alltours
// @desc   Get all all tours
// @access Public
router.get(
  "/alltours",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tour.find()
      .sort({ date: -1 })
      .then(tours => res.json(tours))
      .catch(err => res.status(404).json({ notoursfound: "no tours found" }));
  }
);

// @route GET api/guests/alltours/:id
// @desc GET tour by ID
// @access Private
router.get(
  "/alltours/:tour_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tour.findById(req.params.tour_id)
      .then(tour => res.json(tour))
      .catch(err => res.status(404).json({ notoursfound: "no tours found" }));
  }
);

module.exports = router;
