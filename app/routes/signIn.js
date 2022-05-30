const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req, res) => {
    /* Deliver HTML */
    Controllers.signInController.getSignIn(res);
});

router.post('/', (req,res) => {
    /* Authenticate and send to TIMELINE */
    Controllers.signInController.postSignIn(req,res);
});

module.exports = router;