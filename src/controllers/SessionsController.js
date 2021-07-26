import UserSchema from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import bcrypt from 'bcrypt';

require('dotenv/config');

class SessionsController{
    async login(req, res){
        const user = await UserSchema.findOne({where: {email: req.body.email}})

        if(!user)
            return res.status(400).json({error: "User not exists"});

        const match = await bcrypt.compare(req.body.password, user.password_hash);

        if(!match)
            return res.status(400).json({error: "Password do not match"});

        const User = {
            id: user.id,
            email: user.email,
        };

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        });

        return res.json({user: User, token});
    }

}

export default new SessionsController();