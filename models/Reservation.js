const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const ReservationSchema = new Schema({
  guide: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  tourImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tourID: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  people: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Reservation = mongoose.model("reservation", ReservationSchema);
