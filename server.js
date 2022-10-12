const express = require('express')
const user_api = require('./Router/user')
const post_api = require('./Router/post')
const app = express()

const sequelize = require('./DB/connect');

const port = 4000;

app.use(express.json());

app.use('/api/user', user_api);
app.use('/api/post', post_api);

app.get('/', async function (req, res) {
    res.send('Hello World')

})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


start();

// app.route('/book')
//     .get(function(req, res) {
//         res.send('Get a random book');
//     })
//     .post(function(req, res) {
//         res.send('Add a book');
//     })
//     .put(function(req, res) {
//         res.send('Update the book');
//     });

app.listen(port);