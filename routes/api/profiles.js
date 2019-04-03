const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Guide model
const Profile = require("../../models/Profile");

// Validation
const validateProfileInput = require("../validation/profile");

// @route  GET api/profiles
// @desc   GET current user's profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/profiles
// @desc   POST create & update user profile
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    //   Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.handle = req.body.handle;
    profileFields.age = req.body.age;
    profileFields.country = req.body.country;
    profileFields.region = req.body.region;
    profileFields.city = req.body.city;
    profileFields.bio = req.body.bio;

    // // Social
    profileFields.social = {};
    profileFields.social.youtube = req.body.youtube;
    profileFields.social.twitter = req.body.twitter;
    profileFields.social.linkedin = req.body.linkedin;
    profileFields.social.instagram = req.body.instagram;
    profileFields.social.facebook = req.body.facebook;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //   Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route  GET api/profiles/myprofile
// @desc   GET my profile
// @access Private
// router.get(
//   "/myprofile",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         if (!profile) {
//           res.status(404).json(errors);
//         }
//         res.json(profile);
//       })
//       .catch(err => res.status(404).json({ profile: "there is no profile" }));
//   }
// );

module.exports = router;
