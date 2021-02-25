const express = require('express');
const APP = express();
const PORT = 3000;

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