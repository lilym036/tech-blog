const router = require('express').Router();
const {User, BlogPost, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {

    }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.get('/comment/:id', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
        });


// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;
