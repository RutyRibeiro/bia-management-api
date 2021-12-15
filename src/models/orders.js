const { DataTypes } = require("sequelize");
const database = require("../db");
const itemsModel = require("./items");
const {v4} = require('uuid')

const Orders = database.define("Orders", {
    order_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true,
    },
    order_totalAmount:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    order_type:{
        type: DataTypes.STRING,
        allowNull: false
    },
});


Orders.hasMany(itemsModel,{
    foreignKey:'order_id',  
})

Orders.sync();

module.exports = Orders