const path = require("path");
const User = require('../models/user');

const getSearch = (req,res) => {
    console.log('Hit the Search Service');
    res.sendFile(path.join(__dirname, '../public', 'search.html'));
}

const postSearch = (req,res) => {
    console.log('Hit the Search Service');
    var userid = req.body.username
    User.findOne({$or: [{email: userid}, {username: userid}]})
    .then(user => {
        if(user){
            res.redirect('http://localhost:3000/profile/'+userid);
        } else {
            res.json({
                message: 'User not found!'
            })
        }
    })
}

module.exports = { getSearch, postSearch }