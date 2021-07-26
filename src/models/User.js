import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcrypt';


class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                  },
                  email:{
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                  },
                  password_hash: {
                    type: Sequelize.STRING,
                    allowNull: false,
                  },
            
                  admin: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                  },
            },
            {
                sequelize,
                modelName: 'User'
            }
        )
    
        
    }


    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }

}

export default User