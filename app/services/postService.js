const Post = require('../models/post');

const getAllPosts = (req, res) => {
    console.log('Hit the Profile Service');
    // Insert db request here.
    Post.find().then((result) => res.send(result)).catch((err) => console.log("Error:", err));
    // res.render('profile', {
    //     // pass request results to pug page
    //     owner: req.params.id
    // });
}

const getPost = (req, res) => {
    console.log('Hit the specific profile service');
    User.findOne({username: req.params.id}).then((result) => res.send(result)).catch((err) => console.log("Error:", err));
}

module.exports = { getAllPosts, getPost }