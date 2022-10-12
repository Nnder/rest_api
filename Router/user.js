const express = require('express')
const router = express.Router()

const User = require('../Controller/User');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/', User.createOne)
router.get('/:id', User.getUser)
router.put('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;