const router = require('express').Router();
const { User, Recipe } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll({
      raw: true
    })
    console.log(allRecipes)
    res.render('all-recipes', { allRecipes })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/recipe/:id', async (req, res) => {
  let id = req.params.id
  try {
    const recipe = await Recipe.findByPk(id, {
      // include: [{
      //   model: User
      // }],
      raw: true
    })
    console.log(recipe)
    res.render('recipe', recipe)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
