const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profileController');

router.get('/', (req, res) => {
    /* If JWT, send to USERS profile */
    /* If no JWT, send to login */
    console.log('Hit the Profile Router');
    ProfileController.getUsersProfile(req, res);
})

router.get('/:id', (req, res) => {
    /* If JWT, send to REQUESTED ID profile */
    /* If no JWT, send to login */
    console.log('Hit the Profile Router');
    ProfileController.getProfile(req, res);
});

router.post('/post', (req, res) => {
    // website.com/profile/post
    // ... grab from body
})

module.exports = router;