'use strict';

require ('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('It works!');
});

const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
