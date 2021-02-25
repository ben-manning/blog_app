const express = require('express');
const ROUTER = express.Router();

// POSTS
// index
ROUTER.get('/', (req, res) => {
  res.render('posts/index.ejs');
});

module.exports = ROUTER;