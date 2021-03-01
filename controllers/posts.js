const express = require('express');
const mongoose = require('mongoose');
const ROUTER = express.Router();

// MODEL
const Post = require('../models/posts.js');

// POSTS
// seed the data
ROUTER.get('/seed', (req, res) => {
  Post.create([
    {
      title: 'This is the first title',
      body: 'This is the first body for the posts'
    },
    {
      title: 'This is the second post title',
      body: 'This is the second body for the posts'
    },
    {
      title: 'This is the third post title',
      body: 'This is the third body for the posts'
    }
  ], (err, createdPosts) => {
    res.send(createdPosts);
  })
});

// index
ROUTER.get('/', (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err) {
      console.log(err)
    } else {
      res.render('posts/index.ejs', {
        posts: allPosts
      });
    }
  });
});

// show
ROUTER.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    if (err) {
      console.log(err)
    } else {
      res.render('posts/show.ejs', {
        post: foundPost
      })
    }
  });
});

module.exports = ROUTER;