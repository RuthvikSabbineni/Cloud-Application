const User = require('../models/user');

const getFriends = (req, res) => {
    console.log('Hit the Get Friends Service');
    var username = 'dnargund';
    // Insert db request here.
    User.findOne({username: username}).then((result) => res.render('friends', {
        owner: username,
        result
    })).catch((err) => console.log("Error:", err));
}

module.exports = { getFriends }