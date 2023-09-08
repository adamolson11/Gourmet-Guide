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



})





module.exports = Recipe