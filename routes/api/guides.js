const express = require("express");
const router = express.Router();

// Guide model
const Guide = require("../../models/Guide");

// @route  GET api/guides/test
// @desc   Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Guides works" }));

module.exports = router;
