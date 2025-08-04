const express = require('express');
const router = express.Router();

const Order = require('../models/order.js')

router.post('/', async (req, res) => {
    try{
        const newOrder = await Order.create(req.body);
        res.json(newOrder);
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({})
        res.render('orders/index.ejs', { orders })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;


