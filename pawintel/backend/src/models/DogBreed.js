const mongoose = require('mongoose');

const dogBreedSchema = new mongoose.Schema({
  breedName: { type: String, required: true, unique: true },
  size: { type: String, required: true },
  lifespan: { type: String },
  temperament: [{ type: String }],
  trainability: { type: String },
  energyLevel: { type: String },
  origin: { type: String },
  image: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('DogBreed', dogBreedSchema);
