const mongoose = require('mongoose');

// Define the food schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  status: {
    type: String,
    enum: ['inStock', 'runningLow', 'outStock', 'expired'],
    required: true,
    },
});

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // A user pantry stores many foods
  pantry: [foodSchema],  // Embed foodSchema here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
