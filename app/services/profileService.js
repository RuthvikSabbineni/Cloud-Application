const User = require('../models/user');
const Post = require('../models/post');

const getAllProfiles = (req, res) => {
    console.log('Hit the Profile Service');
    // Insert db request here.
    Post.find().then((result) => res.render('profile', {
        // pass request results to pug page
        owner: req.params.id,
        result
    }))
    .catch((err) => console.log("Error:", err));
}

const getProfile = (req, res) => {
    console.log('Hit the specific profile service');
    if (req.params.id) {
        var id = req.params.id;
    } else {
        id = 'dnargund';
    }
    Promise.all([
        User.findOne({username: id}),
        Post.find({username: id})
        ])
        .then(results => {
            const user = results[0];
            const posts = results [1];
            res.render('profile', {
                user,
                posts
            })    
    })
    .catch(err=>{
    console.error("Something went wrong",err);
      })
    }

module.exports = { getAllProfiles, getProfile }
