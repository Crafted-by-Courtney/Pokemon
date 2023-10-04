const mongoose = require('mongoose');

// Define the Pokemon schema
const pokemonSchema = new mongoose.Schema({
  name: String,
  img: String,
});

// Create the Pokemon model using the schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
