const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    /* Deliver sign up page HTML */
    Controllers.signUpController.getSignUp(res);
});

router.post('/', (req,res) => {
    /* Sign up data has been POSTED */
    /* CREATE NEW USER IN USER DB, CREATE NEW POST COLLECTION IN POST DB */
    /* Send to LOGIN eventually */
    Controllers.signUpController.postSignUp(req,res);
});

module.exports = router;