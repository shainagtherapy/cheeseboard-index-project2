const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

module.exports = router;



//===========================CREATE======================================================



//===========================READ======================================================

router.get('/', (req, res) => {
    res.render('menu/index.ejs');
});

router.get('/new', async (req, res) => {
    res.render('menu/new.ejs')
});


//===========================UPDATE======================================================



//===========================DELETE======================================================