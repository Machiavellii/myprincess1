const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

// User Model
const User = require('../../models/User');

// @route    GET api/users
// @desc     Test route
// @access   Public
router.get('/', (req, res) => {
    User.find((err, users) => {
        if(err) {
            return status(400).json({
                error: err
            })
        }
        res.json({users})
    }).select("nickname email")
});

module.exports = router;