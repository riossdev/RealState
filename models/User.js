import { DataTypes} from 'sequelize'
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
})

export default User;  