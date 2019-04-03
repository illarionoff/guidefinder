const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // Validate handle
  data.handle = !isEmpty(data.handle) ? data.handle : "";

  // Validate age
  data.age = !isEmpty(data.age) ? data.age : "";

  // Validate location
  data.country = !isEmpty(data.country) ? data.country : "";
  data.region = !isEmpty(data.region) ? data.region : "";
  data.city = !isEmpty(data.city) ? data.city : "";

  //   Validate bio
  data.bio = !isEmpty(data.bio) ? data.bio : "";

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age is required";
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }
  if (Validator.isEmpty(data.region)) {
    errors.region = "Region is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required";
  }
  if (Validator.isEmpty(data.bio)) {
    errors.bio = "Bio is required";
  }

  //   Social validator
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
