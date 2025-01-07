import { DataTypes} from 'sequelize'
import bcrypt from 'bcrypt'
import db from '../config/db.js'


const User = db.define('Users', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {  
    type: DataTypes.STRING,
    allowNull: false
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: DataTypes.STRING,
  confirmado: DataTypes.BOOLEAN
},{
  hooks:{
    beforeCreate: async function(User){
      const salt = await bcrypt.genSaltSync(10);
      User.password = await bcrypt.hash(User.password, salt)
  }
  }
})

export default User;  