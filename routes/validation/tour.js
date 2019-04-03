const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateTourInput(data) {
  let errors = {};

  // Validate
  data.body.title = !isEmpty(data.body.title) ? data.body.title : "";
  data.body.place = !isEmpty(data.body.place) ? data.body.place : "";
  data.body.place = !isEmpty(data.body.place) ? data.body.place : "";
  data.body.people = !isEmpty(data.body.people) ? data.body.people : "";
  data.body.description = !isEmpty(data.body.description)
    ? data.body.description
    : "";
  data.file.path = !isEmpty(data.file.path) ? data.file.path : "";

  if (Validator.isEmpty(data.body.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.body.place)) {
    errors.place = "Exact place is required";
  }

  if (Validator.isEmpty(data.body.duration)) {
    errors.duration = "Duration is required";
  }
  if (Validator.isEmpty(data.body.people)) {
    errors.people = "Group size is required";
  }
  if (Validator.isEmpty(data.body.description)) {
    errors.description = "Detailed description is required";
  }
  if (Validator.isEmpty(data.file.path)) {
    errors.tourImage = "Tour image is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
