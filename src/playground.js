import './database'
import { Op } from 'sequelize';
import Order from './models/Order'
import Product from './models/Product'


class Playground{
    static async play(){
        const test = await Product.findAll({
            include: [
                {
                    model: Order,
                    where: {
                        status: "Pendente"
                    }
                }
            ],

            where: {
                name:{
                    [Op.like]: 'Pizza%'
                }
            }
            
        })

        console.log(JSON.stringify(test, null, 2))
    }
}

Playground.play()

