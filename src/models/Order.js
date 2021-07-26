import Sequelize, {Model} from 'sequelize';

class Order extends Model{
    static init(sequelize){
        super.init(
            {
                
                observation: Sequelize.STRING,
                id_product: Sequelize.INTEGER,
                id_user: Sequelize.INTEGER,

            },
            {
                sequelize,
            }
        )
            

        
    }

    static associate(models){
        this.belongsTo(models.Order, { foreignKey: 'id', as: 'users'}, { foreignKey: 'id', as: 'products'});
    }


}

export default Order