'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Sandwich = require('./models/sandwich');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to Mongo');
});

const express = require('express');
const cors = require('cors');
const axios = require('axios');
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

app.get('/yelpData', getYelp);

async function getYelp(req, res) {

  try {
    const locations = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        categories: 'sandwiches',
        location: req.query.location,
        term: req.query.term
      }
    });

    const yelpData = locations.data.businesses;
    const yelpObjs = yelpData.map(location => {
      return new Location(location);
    });
    console.log(yelpObjs);
    res.send(yelpObjs);

  }
  catch (err) {
    handleError(err, res);
  }
}

class Location {
  constructor(yelpLocationObj) {
    this.restaurant = yelpLocationObj.name;
    this.lat = yelpLocationObj.coordinates.latitude;
    this.lon = yelpLocationObj.coordinates.longitude;
    this.yelpUrl = yelpLocationObj.url;
  }
}

app.post('/sandwiches', postSandwiches);

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

