import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcrypt';


class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN
            },
            {
                sequelize,
            }
        )
    
        
    }


    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User