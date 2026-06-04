const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  ageGroup: { type: String, required: true },
  foods: [{ type: String }],
  calories: { type: Number }
});

module.exports = mongoose.model('Nutrition', nutritionSchema);
