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
    enum: ['fig', 'apricot', 'cherry'],
  },
  chocolate: {
    type: String,
    required: true,
    enum: ['dark chocolate', 'milk chocolate', 'vegan semi-sweet']
  },
  nuts: {
    type: String,
    required: true,
    enum: ['pistachios', 'marcona almonds', 'candied pecans']
  },
  carbs: {
    type: String,
    required: true,
    enum: ['baguette', 'pretzel crackers', 'rosemary crackers', 'sourdough crackers', 'gluten-free crackers'],
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
