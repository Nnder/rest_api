const sequelize = require('../DB/connect');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    username: {type: DataTypes.STRING, defaultValue: "Unknown"},
    password: {type: DataTypes.STRING, defaultValue: ""},
})

module.exports = User;