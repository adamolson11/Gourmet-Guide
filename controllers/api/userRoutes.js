const router = require('express').Router();
const { User } = require('../../models');
// const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/new-user', async (req, res) => {
  try{
    const {username, firstName, lastName, email, password} = req.body
    const existingUser = await User.findOne({where: {username}})
    
    //if username exists, gives error
    if (existingUser){
      return res.status(400).json({message: "Username already exists"})
    }

    const existingEmail = await User.findOne({where: {email}})

    //if email exists in database, give error
    if (existingEmail) {
      return res.status(400).json({message: "Email already in use"})
    }

    //add new user to the database
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password
    })
    
    req.session.user_id = newUser.id
    req.session.logged_in = true

    req.session.save(() => {
      res.status(201).json(newUser)
    })
    
  }
  catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
