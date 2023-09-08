const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./userData.json');
// const recipeData = require('./recipeData.json')
const recipeTest = require('./recipeTest.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeTest,{
    individualHooks: true,
    returning: true,
  })


  process.exit(0);
};

seedDatabase();
