const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

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
    const existingUser = User.findOne({where: username})
    
    //if username exists, gives error
    if (existingUser){
      return res.status(400).json({message: "Username already exists"})
    }

    const existingEmail = User.findOne({where: email})

    //if email exists in database, give error
    if (existingEmail) {
      return res.status(400).json({message: "Email already in use"})
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 10)

    //add new user to the database
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashPassword
    })
    //gives 201 status and redirects to profile page
    res.status(201).redirect(`/profile/${newUser.id}`)
  }
  catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
