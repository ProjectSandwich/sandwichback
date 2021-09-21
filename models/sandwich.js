const mongoose = require('mongoose');

const { Schema } = mongoose;

const sandwichSchema = new Schema({
  sandwich: String,
  restaurant: String,
  address: String,
  latitude: Number,
  longitude: Number
});

// await Sandwich.create({
//   sandwich: '',
//   restaurant: '',
//   address: '',
//   latitude: 0,
//   longitude: 0
// });

const Sandwich = mongoose.model('Sandwich', sandwichSchema);

module.exports = Sandwich;
