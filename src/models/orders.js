const { DataTypes } = require("sequelize");
const database = require("../db");

const Orders = database.define("Orders", {
    order_id:{
        type: DataTypes.BIGINT,
        autoIcrement: true,
        allowNull: false,
        primaryKey: true,
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

Orders.associate = (models) => {
    Orders.hasMany(models.Items,{
        foreignKey:'order_id', as: "order_id", 
    })
}

Orders.sync();

module.exports = Orders