const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Routes
const guides = require("./routes/api/guides");
const profiles = require("./routes/api/profiles");

// Body parse middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//   Passport
// Passport middleware
app.use(passport.initialize());
// Passort Config
require("./config/passport")(passport);

// Mongoose connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// User Routes
app.use("/api/guides", guides);
app.use("/api/profiles", profiles);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
