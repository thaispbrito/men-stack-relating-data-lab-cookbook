const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Router Logic

// INDEX - GET /users/:userId/foods
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
});

// NEW - GET /users/:userId/foods/new
router.get('/', (req, res) => {
    res.render('foods/new.ejs');
});


module.exports = router;