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

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('menu/index.ejs', {
            boardList: currentUser.menuIndex,
        })
    } catch (error) {
        console.log(error)
        res.render('/');
    }
});

router.get('/new', async (req, res) => {
    res.render('menu/new.ejs')
});

router.get('/:menuId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const boardDetails= currentUser.menuIndex.id(req.params.menuId);
        res.render('menu/show.ejs', {
            boardDetails: boardDetails,
        })
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

router.get('/:menuId/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const boardDetails = currentUser.menuIndex.id(req.params.menuId)
        res.render('menu/edit.ejs', {
            boardDetails: boardDetails,
        })
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


//===========================UPDATE======================================================

router.put('/:menuId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const boardDetails = currentUser.menuIndex.id(req.params.menuId)

        boardDetails.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/menu/${req.params.menuId}`)
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


//===========================DELETE======================================================

router.delete('/:menuId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
        currentUser.menuIndex.id(req.params.applicationId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/menu`)
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})