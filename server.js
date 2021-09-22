'use strict';

require ('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Sandwich = require('./models/sandwich');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongo');
});

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (request, response) => {
  response.send('SERVER HOME PAGE');
});

app.get('/getSandwiches', async (req, res) => {
  const sandos = await Sandwich.find();
  res.send(sandos);
});

app.post('/getSandwiches', postSandwiches);

async function postSandwiches(req, res) {

  try {
    const newSandwich = await Sandwich.create(req.body);
    res.send(newSandwich);
  }
  catch (err) {
    handleError(err, res);
  }
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

function handleError(err, res) {
  console.log(err);
  res.status(500).send('Error!');
}

