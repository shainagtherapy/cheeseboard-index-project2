const express = require('express');
const router = express.Router();

const Order = require('../models/order.js')

//======================= CREATE ==============================================

router.post('/', async (req, res) => {
    try{
        const newOrder = await Order.create(req.body);
        res.redirect('orders/confirmation')
    } catch (error) {
        console.log(error)
    }
})


//======================= READ ==============================================
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({})
        res.render('orders/index.ejs', { orders })
    } catch (error) {
        console.log(error)
    }
})

router.get('/ordermenu', async (req,res) => {
    res.render('orders/ordermenu.ejs')
});

router.get('/new', async (req, res) => {
        res.render('orders/new.ejs')
});

router.get('/confirmation', async (req,res) => {
    res.render('orders/confirmation.ejs')
});

module.exports = router;


