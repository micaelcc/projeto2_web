import Order from '../models/Order';
import User from '../models/User';
import Product from '../models/Product';
import './../database/'


class OrderController{
    async store(req, res){
        console.log(req.userId)
        const UserExists = await User.findByPk(req.userId);

        if(!UserExists){
            return res.status(400).json({error: 'User not exists'});
        }
        
        const ProductExists = await Product.findByPk(req.body.id_product)

        if(!ProductExists){
            return res.status(400).json({error: 'product not exists'});
        }
        

        const order = await Order.create({
            id_user: req.userId,
            id_product: req.body.id_product,
            observation: req.body.observation
        });


        return res.json(order);
    }

    async update(req, res){
        const order = await Order.findByPk(1);

        if(!order){
            return res.status(400).json({error: 'Order not exist'});
        }

        if(req.body.observation)
            order.observation = req.body.observation;
        
        if(req.body.id_product){
            const ProductExists = await Product.findByPk(req.body.id_product)

            if(!ProductExists){
                return res.status(400).json({error: 'product not exists'});
            }

            product.id_product = req.body.id_product;
        }


        const att = await product.save();
        
        return res.json(att);
    }

    async show(req, res){
        const orders = await Order.findAll();

        return res.json(orders);
    }


    async destroy(req, res){
        const order = await Order.findByPk(req.body.id);

        if(!order){
            return res.status(400).json({error: 'order not exists'});
        }

        product.destroy();

        return res.json({message: `Order id(${req.body.id}) deleted!`});
        
    }
}

export default new OrderController();