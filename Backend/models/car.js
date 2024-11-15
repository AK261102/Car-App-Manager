const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], default: [] },
  images: { type: [String], default: [] }, // Added missing comma here
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
