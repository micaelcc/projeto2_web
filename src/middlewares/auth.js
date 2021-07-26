import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import authConfig from '../config/auth';

require('dotenv/config');

export default async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
  
    if(!authHeader)
        return res.status(401).json({error: 'Token not found.'});

    const [, token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;

        req.id = decoded.id;
        return next();
    }catch(err){
        return res.status(401).json({error: 'Token invalid'});
    }
}