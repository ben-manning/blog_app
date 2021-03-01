const express = require('express');
const APP = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongo not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// MODELS
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// CONTROLLERS
const postsController = require('./controllers/posts');

// ROUTES
// site index
APP.get('/', (req, res) => {
  res.render('index.ejs');
});

APP.use('/posts', postsController);


// LISTENING PORT
APP.listen(PORT, () => {
  console.log(`app is listening at:`, PORT)
});