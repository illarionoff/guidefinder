const express = require("express");
const path = require('path')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Static folder
app.use("/uploads", express.static("uploads"));



// Routes
const guides = require("./routes/api/guides");
const guests = require("./routes/api/guests");
const profiles = require("./routes/api/profiles");
const tours = require("./routes/api/tours");
const reservations = require("./routes/api/reservations");


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

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
app.use("/api/guests", guests);
app.use("/api/profiles", profiles);
app.use("/api/tours", tours);
app.use("/api/reservations", reservations);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
