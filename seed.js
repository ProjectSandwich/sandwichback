const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const CreateSandwich = require('./CreateSandwich');

async function seed() {

}

seed();
