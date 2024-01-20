const sequelize = require('../config/sql-connection')
const {DataTypes, Model } = require('sequelize')


class UserModel extends Model{}

UserModel.init({
        id :{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true,
            allowNull: false

        },
        name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        email:{
            type : DataTypes.STRING,
            allowNull : false,
            unique: true,
            validate:{
                isEmail : true
            }
        },
        password :{
            type : DataTypes.STRING,
            allowNull : false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull : false
        }

    },
    {
        sequelize,
        modelName : "users"
    }
)



UserModel.sync().then(r => {})

module.exports = UserModel