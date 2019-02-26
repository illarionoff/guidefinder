const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Guide model
const Guide = require("../../models/Guide");

// Bring SecretOrKey from config
const keys = require("../../config/keys");

// @route  GET api/guides/test
// @desc   Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Guides works" }));

// @route  GET api/users/register
// @desc   Register user
// @access Public
router.post("/register", (req, res) => {
  Guide.findOne({ email: req.body.email }).then(guide => {
    if (guide) {
      return res.status(400).json({ email: "Email exists" });
    } else {
      //   Create new Guide
      const newGuide = new Guide({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newGuide.password, salt, (err, hash) => {
          if (err) throw err;
          newGuide.password = hash;
          newGuide
            .save()
            .then(guide => res.json(guide))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST api/guides/login
// @desc   Login User / Return JWT Token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Guide.findOne({ email }).then(guide => {
    // Check for user
    if (!guide) {
      return res.status(404).json("User not found");
    }

    // Check Password
    bcrypt.compare(password, guide.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        // Create JWT payload
        const payload = {
          id: guide._id,
          name: guide.name
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
        return res.status(400).json("Password  incorrent");
      }
    });
  });
});
// @route  GET api/guides/current
// @desc   Return current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.email,
      email: req.user.email
    });
  }
);

module.exports = router;
