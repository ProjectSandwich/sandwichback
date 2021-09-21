const mongoose = require('mongoose');

const { Schema } = mongoose;

const sandwichSchema = new Schema({
  // Example Schema??
  // title: String,
  // restaurant: String,
  // location: String,
});

const CreateSandwich = mongoose.model('CreateSandwich', sandwichSchema);

module.exports = CreateSandwich;
