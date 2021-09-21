const mongoose = require('mongoose');
require('dotenv').config();

const Sandwich = require('./models/sandwich');

mongoose.connect(process.env.MONGODB_URL);

async function seed() {

  const sandwichData = new Sandwich({
    sandwich: 'Cran-Turkey',
    restaurant: 'Lu\'s Deli',
    address: '1010 3rd St SE, Cedar Rapids, IA 52401',
    latitude: 41.971690,
    longitude: -91.659190
  });

  await Sandwich.create({
    sandwich: 'Pork Tenderloin',
    restaurant: 'Breitbach’s Country Dining',
    address: '563 Balltown Rd, Sherrill, IA 52073',
    latitude: 42.638970,
    longitude: -90.869040
  });

  await Sandwich.create({
    sandwich: 'Chicken Gyro',
    restaurant: 'Oasis Falafel',
    address: '206 N Linn St, Iowa City, IA 52245',
    latitude: 41.663910,
    longitude: -91.531350
  });

  await Sandwich.create({
    sandwich: '',
    restaurant: 'Catfish Charlie’s',
    address: '1630 E 16th St, Dubuque, IA 52001',
    latitude: 42.511970,
    longitude: -90.649350
  });

  await Sandwich.create({
    sandwich: 'Spicy Chicken Sandwich',
    restaurant: 'Palisades Cafe',
    address: '117 1st St W, Mt Vernon, IA 52314',
    latitude: 41.922850,
    longitude: -91.417480
  });

  await Sandwich.create({
    sandwich: 'Pulled Pork',
    restaurant: 'Billy Sim’s BBQ',
    address: '2750 Mt Pleasant St, Burlington, IA 52601',
    latitude: 40.826350,
    longitude: -91.141990
  });

  await Sandwich.create({
    sandwich: 'Pastrami and Rye',
    restaurant: 'The Blue Heron',
    address: '1401 N Federal Ave, Mason City, IA 50401',
    latitude: 43.16508216114538,
    longitude: -93.20067168508048
  });

  await Sandwich.create({
    sandwich: 'Lobster Roll',
    restaurant: 'SmackHaus',
    address: '1302 US-71, Okoboji, IA 51355',
    latitude: 43.386858513178595,
    longitude: -95.12650664643394
  });

  await Sandwich.create({
    sandwich: 'Loose Meat',
    restaurant: 'Canteen Lunch in the Alley',
    address: '112 2nd St E, Ottumwa, IA 52501',
    latitude: 41.018143854278875,
    longitude: -92.41194202754865
  });

  await Sandwich.create({
    sandwich: 'The Chuckwagon Burger',
    restaurant: 'Chuckwagon Restaurant',
    address: '113 5th St, Adair, IA 50002',
    latitude: 41.49506907570108,
    longitude: -94.64417677347733
  });

  await Sandwich.create({
    sandwich: 'Breaded Pork Tenderloin',
    restaurant: 'Nick’s Bar & Grill',
    address: '9769 University Ave, Clive, IA 50325',
    latitude: 41.6014588718066,
    longitude: -93.75157314983034
  });

  await Sandwich.create({
    sandwich: 'Turkey, Brie and Cranberry Panini',
    restaurant: 'Her Soup Kitchen',
    address: '625 S Dubuque St, Iowa City, IA 52240',
    latitude: 41.65366236988412,
    longitude: -91.53340289125181
  });

  await Sandwich.create({
    sandwich: 'Swamp Donkey',
    restaurant: 'The Buck Snort',
    address: '113 4th St, Neola, IA 51559',
    latitude: 41.44910080240657,
    longitude: -95.61785450663929
  });

  await Sandwich.create({
    sandwich: 'The Big Heavy',
    restaurant: 'Starboard Market',
    address: '310 Main Ave, Clear Lake, IA 50428',
    latitude: 43.13668651203227,
    longitude: -93.3817640303836
  });

  await Sandwich.create({
    sandwich: 'La Quercia Grilled Cheese',
    restaurant: 'The Cheese Shop',
    address: '833 42nd St, Suite B, Des Moines, IA 50312',
    latitude: 41.59330508000963,
    longitude: -93.67413748856217
  });

  await Sandwich.create({
    sandwich: 'Giovanni’s Sicilian Sub',
    restaurant: 'Antonella’s Pizzeria II',
    address: '421 W River Dr, Davenport, IA 52801',
    latitude: 41.52016893785491,
    longitude: -90.57908441740044
  });

  await Sandwich.create({
    sandwich: 'Beet and Goat Cheese',
    restaurant: 'Cafe Fresh',
    address: '1514 5th Ave, Moline, IL 61265',
    latitude: 41.50648193412079,
    longitude: -90.51561906343575
  });

  await Sandwich.create({
    sandwich: 'Turkey Italiano',
    restaurant: 'Village Corner Deli',
    address: '1030 Mound St, Davenport, IA 52803',
    latitude: 41.531134568635515,
    longitude: -90.54653461387882
  });

  await Sandwich.create({
    sandwich: 'Berry Gouda Burger',
    restaurant: 'The General Store',
    address: '12612 Stone City Rd, Anamosa, IA 52205',
    latitude: 42.11324912141363,
    longitude: -91.35099790221581
  });












  await sandwichData.save();
}

seed();
