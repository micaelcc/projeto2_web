import Sequelize, {Model} from 'sequelize';

class Product extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.DOUBLE,

            },
            {
                sequelize,
            }
        )
    
        
    }


}

export default Product