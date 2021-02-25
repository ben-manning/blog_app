const express = require('express');
const APP = express();
const PORT = 3000;

APP.get('/', (req, res) => {
  res.render('index.ejs');
});

APP.get('/posts', (req, res) => {
  res.render('posts/index.ejs');
});

APP.listen(PORT, () => {
  console.log(`app is listening at:`, PORT)
});