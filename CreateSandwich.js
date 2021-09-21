const mongoose = require('mongoose');

const { Schema } = mongoose;

const sandwichSchema = new Schema({

  /* Schema for new sandwich should go here */


});

const CreateSandwich = mongoose.model('CreateSandwich', sandwichSchema);

module.exports = CreateSandwich;
