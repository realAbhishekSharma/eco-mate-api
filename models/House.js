const sequelize = require('../config/sql-connection')
const {DataTypes , Model } = require('sequelize')
const UserModel = require("./User")


class HouseModel extends Model{}

HouseModel.init({
        id :{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true,
            allowNull: false

        },
        noOfMember:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        location:{
            type: DataTypes.STRING,
            allowNull : false
        }

    },
    {
        sequelize,
        modelName : "house"
    }
)

HouseModel.belongsTo(UserModel)
HouseModel.sync().then(r => {})

module.exports = HouseModel