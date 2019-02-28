const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const TourSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }, 
  title: {
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tour = mongoose.model("tour", TourSchema);
