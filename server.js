const express = require('express');
const APP = express();
const PORT = 3000;

APP.get('/', (req, res) => {
  res.render('index.ejs');
});

APP.listen(PORT, () => {
  console.log(`app is listening at:`, PORT)
});