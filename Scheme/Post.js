const sequelize = require('../DB/connect');
const {DataTypes} = require('sequelize');

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    text: {type: DataTypes.STRING, defaultValue: ""},
})

module.exports = Post;