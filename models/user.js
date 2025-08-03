const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cheeses: {
    type: String,
    required: true,
  },
  meats: {
    type: String,
    required: true,
  },
  veggie: {
    type: String,
    required: true,
  },
  fruit: {
    type: String,
    required: true,
  },
  accout: {
    type: String,

  },
  jam: {
    type: String,
    required: true,
    enum: ['Fig', 'Apricot', 'Cherry'],
  },
  chocolate: {
    type: String,
    required: true,
    enum: ['Dark chocolate', 'Milk chocolate', 'Vegan semi-sweet']
  },
  nuts: {
    type: String,
    required: true,
    enum: ['Pistachios', 'Marcona almonds', 'Candied pecans']
  },
  carbs: {
    type: String,
    required: true,
    enum: ['Baguette', 'Pretzel crackers', 'Rosemary crackers', 'Sourdough crackers', 'Gluten-free crackers'],
  },
  floralGarnishes: {
    type: String,
    required: true,
  },
  winePairings: {
    type: String,
  },
  notes: {
    type: String,
  }
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  menuIndex: [menuSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
