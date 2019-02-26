const express = require("express");
const router = express.Router();

// Guide model
const Guide = require("../../models/Guide");

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
      //   Create new User
      const newGuide = new Guide({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: req.body.password
      });
      newGuide
        .save()
        .then(guide => res.json(guide))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
