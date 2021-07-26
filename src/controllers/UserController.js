import User from '../models/User';
import Order from '../models/Order'
import './../database/'

import bcrypt from 'bcrypt';

class UserController{
    async store(req, res){ 

        const userExists = await User.findOne({where: {email: req.body.email}});

        if(userExists)
            return res.status(400).json({error: 'This email is being used by another user'});
        
        const password_hash = await bcrypt.hash(req.body.password, 8);


        const {id, name, email} = await User.create({
            email: req.body.email,
            name: req.body.name,
            password_hash,
            admin: false,
        });

        return res.json({id, name, email});
    }

    async update(req, res){
        const user = await User.findByPk(req.userId);

        const {email, name, oldPassword, password} = req.body;

        if(email && user.email !== email){
            const userExists = await User.findOne({
                where: {email: req.body.email},
            })

            if(userExists)
                return res.status(400).json({error: 'User already exists.'});
        }

        
        const checkPass = user.checkPassword(oldPassword)

        
        if(oldPassword && !checkPass){
            return res.status(401).json({error: 'Password does not match'});
        }

        if(password)
            user.password_hash = await bcrypt.hash(password, 8);

        const att = await user.save(req.body)

        return res.status(200).json({id: att.id, name: att.name, email: att.email});
        
    }

    async show(req, res){
        const users = await User.findAll();
        
        return res.json(users);
    }

    async showOrders(req, res){
        const orders = await Order.findAll({where: {id_user: req.userId}})

        return res.json(orders)
    }

    async destroy(req, res){
        const user = await User.findByPk(req.UserId);

        if(!user){
            return res.status(400).json({error: 'User not exists'});
        }

        user.destroy();

        return res.json({message: `User id(${req.userId}) deleted!`});
        
    }

}

export default new UserController();