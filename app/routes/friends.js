const express = require('express');
const router = express.Router();

const FriendsController = require('../controllers/friendsController.js');

router.get('/', (req, res) => {
    /* Return users friends list IF JWT VALID */
    /* ELSE RETURN TO LOGIN PAGE */
    console.log('Hit the friends Router');
    FriendsController.getFriends(req, res);
})

module.exports = router;