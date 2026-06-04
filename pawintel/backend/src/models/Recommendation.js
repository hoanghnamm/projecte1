const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: {
    homeType: String,
    children: Boolean,
    activityLevel: String,
    experienceLevel: String,
    groomingPreference: String
  },
  results: [{
    breed: { type: mongoose.Schema.Types.ObjectId, ref: 'DogBreed' },
    score: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
