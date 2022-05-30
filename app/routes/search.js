const express = require('express');
const router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req,res) => {
    /* Deliver search HTML page */
    Controllers.searchController.getSearch(req,res);
});

router.post('/', (req,res) => {
    /* Return search results */
    Controllers.searchController.postSearch(req,res);
});

module.exports = router;