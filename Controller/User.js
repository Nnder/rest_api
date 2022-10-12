const userScheme = require('../Scheme/User');

class User {
    async getUser(req, res){
        try {
            const id = req.params.id
            const user = await userScheme.findOne({where: {id} });
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async createOne(req, res){
        try {
            const {username, password} = req.body;

            const user = await userScheme.create({username, password});
            res.status(201).json(user);


        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async update(req, res){
        try {
            const id = req.params.id
            const {username, password} = req.body;

            const user = await userScheme.findOne({where: {id} });
            user.username = username;
            user.password = password;

            await user.save();

            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }
    async delete(req, res){
        try {
            const id = req.params.id

            // const user = await userScheme.destroy({where: {id} });

            const user = await userScheme.findOne({where: {id} });

            if(user){
                await user.destroy();
                // user.save();

                res.status(200).json(user);
            } else {
                res.status(200).json({Message:"Can't delete"});
            }

        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }
}

module.exports = new User();