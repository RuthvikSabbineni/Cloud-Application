const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const User = require('../models/user');

const getSignUp = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'signUp.html'));
}

const postSignUp = (req,res) => {
    let user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        campus : req.body.campus,
        bio : req.body.bio
    })
    email = req.body.email;
    const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        });
    user.token = token;
    user.save().then(user => {res.redirect('http://localhost:3000/profile')}).catch(error => { res.json({message: error.message})})
}

module.exports = {
    getSignUp, postSignUp
}