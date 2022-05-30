const path = require("path");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs/dist/bcrypt");

const getSignIn = (res) => {
    res.sendFile(path.join(__dirname, '../public', 'signIn.html'));
}

const postSignIn = (req, res, next) => {
    var userid = req.body.username
    var pass = req.body.password

    User.findOne({$and: [{email: userid}, {password: pass}]})
    .then(user => {
        if(user){
            const email = req.body.email;
            const name = user.username
            const token = jwt.sign(
                { user_id: user.username, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
            user.token = token;
            res.redirect('http://localhost:3000/profile'+name);
            /* bcrypt.compare(pass, user.password, function(err,result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message:'Login successful!',
                        token
                    })
                } else {
                    res.json({
                        message: 'Password validation failed.'
                    })
                }
            }) */
            res.json({
                message:'Login successful'
            })
        } else {
            res.json({
                message: 'User not found!'
            })
        }
    })
}

module.exports = {
    getSignIn, postSignIn
}