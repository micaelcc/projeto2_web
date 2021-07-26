import Sequelize, {Model} from 'sequelize';

class Order extends Model{
    static init(sequelize){
        super.init(
            {
                
                observation: Sequelize.STRING,
                id_product: Sequelize.INTEGER,
                id_user: Sequelize.INTEGER,
                status: Sequelize.STRING

            },
            {
                sequelize,
                modelName: 'Order'
            }
        )
            

        
    }
   
    static associate(models){
        this.belongsTo(models.User)
    }

    static associate(models){
        this.hasOne(models.Product)
    }


}

export default Order