const postScheme = require('../Scheme/Post');


class Post {
    async getPost(req, res){
        try {
            const id = req.params.id
            const post = await postScheme.findOne({where: {id} });

            if(post){
                res.status(200).json(post);
            } else {
                res.status(200).json({Message:"Can't get"});
            }


        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async getPosts(req, res){
        try {
            const sort = req.params.sort
            const post = await postScheme.findOne({where: {id} });

            res.status(200).json(post);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async createOne(req, res){
        try {
            const {userId, text} = req.body;
            const post = await postScheme.create({userId, text});
            res.status(201).json(post);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async update(req, res){
        try {
            const id = req.params.id
            const {userId, text} = req.body;

            const post = await postScheme.findOne({where: {id} });
            if(post){
                post.userId = userId;
                post.text = text;
                await post.save();
                res.status(200).json(post);
            } else {
                res.status(200).json({Message:"Can't update"});
            }



        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async delete(req, res){
        try {
            const id = req.params.id
            const post = await postScheme.findOne({where: {id} });

            if(post){
                await post.destroy();
                // user.save();

                res.status(200).json(post);
            } else {
                res.status(200).json({Message:"Can't delete"});
            }

        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }
}

module.exports = new Post();