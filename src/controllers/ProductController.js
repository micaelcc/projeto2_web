import Product from '../models/Product';

import './../database/'

import bcrypt from 'bcrypt';

class ProductController{
    async store(req, res){
        const new_product = await Product.create(req.body);


        return res.json(new_product);
    }

    async update(req, res){
        const product = await Product.findByPk(1);

        if(!product){
            return res.status(400).json({error: 'Product not exist'});
        }

        if(req.body.name)
            product.name = req.body.name;
        
        if(req.body.description)
            product.description = req.body.description;

        if(req.body.price > 0)
            product.price = req.body.price

        const att = await product.save();
        
        return res.json(att);
    }

    async show(req, res){
        const products = await Product.findAll();

        return res.json(products);
    }

    async getOne(req, res){
        const product = await Product.findByPk(req.params.id);

        if(!product){
            return res.status(400).json({error: 'Product not exists'});
        }

        return res.json(product);
    }

    async destroy(req, res){
        const product = await Product.findByPk(req.body.id);

        if(!product){
            return res.status(400).json({error: 'Product not exists'});
        }

        product.destroy();

        return res.json({message: `Product id(${req.body.id}) deleted!`});
        
    }
}

export default new ProductController();