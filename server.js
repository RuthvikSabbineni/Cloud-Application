/* Dependencies */
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
let path = require('path');

/* Use env-defined port or default to 3000 */
let port = process.env.PORT || 3000;

/* Database connection */
const uri = process.env.DB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => console.log('Connection to db established.'))
    .catch((err) => console.log('Error:', err));

/* Get database collection names for confirmation */
mongoose.connection.on('open', function () {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log('Error:', err);
        } else {
            names.forEach(e => console.log('-', e.name))
        }
    })
})

/* Middleware JSON handling function for POST/PUT requests */
app.use(express.json());

/* Deliver static public facing */
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({extended: true}));

/* Add pug functionality */
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'pug');

/* Route Handling */
const timeline = require('./app/routes/timeline');
const profile = require('./app/routes/profile');
const signIn = require('./app/routes/signIn');
const signUp = require('./app/routes/signUp');
const search = require('./app/routes/search');
const friends = require('./app/routes/friends');

app.use('/profile', profile);
app.use('/signIn', signIn);
app.use('/signUp', signUp);
app.use('/search', search);
app.use('/friends', friends);
app.use('/', timeline);

app.listen(port, () => {
    console.log("Server is listening on port", port);
})