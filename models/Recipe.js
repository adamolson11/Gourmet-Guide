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
    },
    steps: {
        type: DataTypes.JSON,
    },
    submittedUserId: {
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



    //chicken soup
    // meat, vegetable, spices, (all are arrays???)
    // spices
    //pepper
    //1 tsp

    //instructions: (array of steps objects)

    // },

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

}, 
{
  
    sequelize,
    freezeTableName: true,
    modelName: 'recipe',
})





module.exports = Recipe