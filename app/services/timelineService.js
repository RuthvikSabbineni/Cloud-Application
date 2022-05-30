const User = require('../models/user');
const Post = require('../models/post');

const getTimeline = (req, res) => {
    // Insert db request here.
    Post.find().then((result) => res.render('timeline', {
        // pass request results to pug page
        owner: req.params.id,
        result
    }))
        .catch((err) => console.log("Error:", err));
}

module.exports = { getTimeline }