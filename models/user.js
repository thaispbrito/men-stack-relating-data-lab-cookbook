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
  // A user pantry stores many food items
  pantry: [foodSchema],  // Embed foodSchema here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
