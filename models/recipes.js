const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    }

    // ingredients: {
    //     type: DataTypes.STRING,

    //chicken soup
    // meat, vegetable, spices, (all are arrays???)
    // spices
        //pepper
            //1 tsp

    //instructions: (array of steps objects)

    // },


})





module.exports = Recipe