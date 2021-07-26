import Sequelize from 'sequelize';
import User from '../models/User'
import Product from '../models/Product'
import Order from '../models/Order'

import databaseConfig from '../config/database'

const models = [User, Order, Product]

class Database{
    constructor(){
        this.connection = new Sequelize(databaseConfig);
        //this.associate();
        this.init();
        
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }

    associate(){       
        models.forEach(model => {
            if(model.associate){
                model.associate(this.connection.models)
            }
        })
    }
}

export default new Database();