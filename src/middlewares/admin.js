import User from '../models/User';
import './../database/'

export default async (req, res, next) => {
    const isAdmin = await User.findOne({where: {id: req.userId, admin: true}});
    
    if(!isAdmin){
        return res.status(401).json({error: 'User not is admin'});
    }
    
    return next();
    
}