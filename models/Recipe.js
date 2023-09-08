const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
      },
    ingredients: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    steps: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    createdUserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },


      
    //should ingredients and instructions be separate models? 
    // ingredients: {
    //     type: DataTypes.STRING,
    //      allowNull: false,

    //DataTypes.JSON will send and return the objects just find, good call Noah - AB



    //chicken soup
    // meat, vegetable, spices, (all are arrays???)
    // spices
    //pepper
    //1 tsp

    //we could implement this, but it would be more work to traverse two sets of arrays of objects. We could probably get away with adding it later if we decide it's worth it. For now I kept it simple - AB

    //instructions: (array of steps objects)

    // },

    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

}, 
{
    hooks: {
        beforeCreate:(recipe) => {
            const shortName = recipe.name.split(' ').join('-').toLowerCase()
            recipe.shortName= shortName
        }
    },
    sequelize,
    freezeTableName: true,
    modelName: 'recipe',
})





module.exports = Recipe

//if we add the ability to create a recipe, we will need to add functionality to auto assign the createdUserId value