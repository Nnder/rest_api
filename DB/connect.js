const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'app',
    'postgres',
    'root',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

module.exports = sequelize
