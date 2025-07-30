const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

module.exports = router;



//===========================CREATE======================================================

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.menuIndex.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/menu`);
        
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


//===========================READ======================================================

router.get('/', (req, res) => {
    res.render('menu/index.ejs');
});

router.get('/new', async (req, res) => {
    res.render('menu/new.ejs')
});


//===========================UPDATE======================================================



//===========================DELETE======================================================