import Sequelize from 'sequelize';
import User from '../models/User'
import Product from '../models/Product'
import Order from '../models/Order'

import databaseConfig from '../config/database'

const models = [User, Order, Product]

class Database{
    constructor(){
        this.connection = new Sequelize(databaseConfig);
        
        this.init();
        this.associate();
        
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }

    associate(){       
        models[1].hasOne(
            this.connection.models.Product, 
            {through: 'orders', foreignKey: 'id'}
        )

        models[2].belongsTo(
            this.connection.models.Order, 
            {through: 'products', foreignKey: 'id'}
        )

        models[1].belongsTo(
            this.connection.models.User, 
            {through: 'users', foreignKey: 'id'}
        )
        
    }
}

export default new Database();