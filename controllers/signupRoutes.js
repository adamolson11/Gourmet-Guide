const router = require('express').Router();
const { User } = require('../models');

router.post('/signup', (req, res) => {
  try {
    // Create a new user...
    User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      // do I need to add ID or anything???
    })

      .then((newUser) => {
        // Send the newly created row as a JSON object
        res.json(newUser);
      })

    // Redirect the user to a success page or any other desired route
    res.redirect('/success'); // has its own page now.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a user' });
  }
});

module.exports = router;
