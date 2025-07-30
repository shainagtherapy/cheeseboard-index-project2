const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
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
    required: true,
  },
  jam: {
    type: String,
    required: true,
    enum: ['fig, apricot, cherry'],
  },
  chocolate: {
    type: String,
    required: true,
    enum: ['dark chocolate, milk chocolate, vegan semi-sweet']
  },
  nut: {
    type: String,
    required: true,
    enum: ['pistachios, marcona almonds, candied pecans']
  },
  carbs: {
    type: String,
    required: true,
    enum: ['baguette, pretzel crackers, sourdough crackers, gluten-free crackers'],
  },
  floralGarnishes: {
    type: String,
    required: true,
  },
  RecommendedWinePairings: {
    type: String,
  },
  Notes: {
    type: String,
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  boardMenu: [menuSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
