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

module.exports = router;