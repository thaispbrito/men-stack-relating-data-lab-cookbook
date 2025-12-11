const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Router Logic

// INDEX - GET /users
// Show all users to create a community page
router.get('/', async (req, res) => {
    try {
        // Get all users from the database
        const allUsers = await User.find({});
        // Render the users index view, passing in all users
        res.render('users/index.ejs', {
            users: allUsers,
        });
    } catch (error) {
        // If any errors, log them and redirect back home
        console.log(error);
        res.redirect('/');
    }
});

// SHOW - GET /users/:userId
router.get('/:userId', async (req, res) => {
    try {
        const otherUser = await User.findById(req.params.userId);
        if (!otherUser) {
            return res.redirect('/users'); // user not found
        }
        res.render('users/show.ejs', {
            otherUser: otherUser
        });
    } catch (error) {
        console.log(error);
        res.redirect('/users');
    }
});

module.exports = router;