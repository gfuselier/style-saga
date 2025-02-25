const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        }, {
          model: Comment,
          attributes: ['id', 'text', 'user_id', 'post_id'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id',
  withAuth,
  async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User }, { model: Comment },
        ],
      });
      const post = postData.get({ plain: true });
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/profile', 
  withAuth, 
  async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post}, { model: Comment}],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', 
      {...user,
        logged_in: true}
        );
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
