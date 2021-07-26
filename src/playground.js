import './database'
import { Op } from 'sequelize';
import Order from './models/Order'
import Product from './models/Product'


class Playground{
    static async play(){

        const test = await Order.findAll({
            include: [
                {
                    model: Product,
                    where: {
                        name:{
                            [Op.like]: 'Pizza%'
                        }
                    }
                }
            ],

            where:{
                status: "Pendente"
            }
            
        })



        console.log(JSON.stringify(test, null, 2))
    }
}

Playground.play()
console.log('blabla')

