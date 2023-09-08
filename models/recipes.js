const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    }



})





module.exports = Recipe