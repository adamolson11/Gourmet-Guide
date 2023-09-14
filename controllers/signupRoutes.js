
const router = require('express').Router();
const { User } = require('../models');
// const { findByPk } = require('../models/User'); //do I need this???
// const withAuth = require('../utils/auth'); // I don't think this is needed because it is a new user.


router.post('/signup', async (req, res) => {
  try {
   //this is using the sequelize  to create the users
    const newUser = await User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      createdRecipesIds: [],
    });

    // now we need to send that response to the JSON data table
    res.json(newUser);
  } catch (error) {
    
    res.status(500).json({ error: 'no user was created...yet' });
  }
});

module.exports = router;
