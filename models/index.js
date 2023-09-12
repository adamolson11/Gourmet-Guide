const User = require('./User');
const Recipe = require('./Recipe')

User.hasMany(Recipe, {
  foreignKey: 'createdUserId'
})

Recipe.belongsTo(User, {
  foreignKey: 'createdUserId'
})
module.exports = { User, Recipe };
