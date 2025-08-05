const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String },
  customerEmail: { type: String },
  orderDate: { type: Date },
  desiredPickupDate: { type: Date },
  cheeseboard: { type: String, required: true }, // or you could reference a Menu model
  quantity: { type: Number, required: true },
  jam: {
    type: String,
    enum: ['fig', 'apricot', 'cherry'],
    default: 'None'
  },
  chocolate: {
    type: String,
    enum: ['dark chocolate', 'milk chocolate', 'vegan semi-sweet'],
    default: 'None'
  },
  nuts: {
    type: String,
    enum: ['marcona almonds', 'pistachios', 'candied pecans'],
    default: 'None'
  },
  carbs: {
    type: String,
    enum: ['baguette', 'rosemary crackers', 'sourdough crackers', 'gluten-free'],
    default: 'None'
  },
  notes:{
  notes: String,
  },
  status: {
    type: String,
    enum: ['enquiry', 'confirmed', 'complete'],
    default: 'Enquiry'
  },
  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;