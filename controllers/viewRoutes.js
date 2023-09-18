const router = require('express').Router();
const { User, Recipe } = require('../models');
const { findByPk } = require('../models/User');
const withAuth = require('../utils/auth');




// router.get('/layouts/main', (req, res) => {
//   try {
//     res.render('layouts/main'); // Render the 'main' template without any additional data
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });





router.get('/', async (req, res) => {
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
    res.render('all-recipes', { allRecipes, logged_in: req.session.logged_in })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/recipe/:id', async (req, res) => {
  let id = req.params.id
  try {
    let recipe = await Recipe.findByPk(id, {
      include: [{ model: User }]
    })
    recipe = recipe.get({ plain: true })
    let data = {
      ...recipe,
      logged_in: req.session.logged_in
    }
    res.render('recipe', data)
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


router.get('/profile', async (req, res) => {
  try {
    let user = await User.findByPk(req.session.user_id, {
      include: [{ model: Recipe }]})
    user = user.get({ plain: true })
    let data = {
      ...user,
      logged_in: req.session.logged_in
    }
    res.render('profile', data)
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/signup', async (req, res) => {
  try {
    res.render('signup')
  }
  catch (err) {
    res.status(500).json(err)
  }
})

router.get('/add-recipe', (req, res) => {
  const userId = req.session.user_id
  if (!userId) {
    res.redirect('/login')
  }
  try {
    res.render('add-recipe',
    {logged_in: req.session.logged_in})
  } catch (err) {
    res.status(500).json(err)
  }
})



router.get('/sucess', async (req, res) => {
  try {
    res.render('sucess')
  }
  catch (err) {
    res.status(500).json(err)
  }
})






module.exports = router;
