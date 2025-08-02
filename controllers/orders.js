const express = require('express');
const router = express.Router();

const Order = require('../models/order.js')

router.post('/', async (req, res) => {
    console.log(req.body);
    const order = await Order.create(req.body);

        

  

    res.json(order);

})

module.exports = router;


