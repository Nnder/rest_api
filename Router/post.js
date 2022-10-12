const express = require('express')
const router = express.Router()
const Post = require('../Controller/Post');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/', Post.createOne)
router.get('/:id', Post.getPost)
router.put('/:id', Post.update);
router.delete('/:id', Post.delete);

module.exports = router;