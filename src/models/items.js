const { DataTypes } = require("sequelize");
const database = require("../db");

const Items = database.define('Items', {
    item_price:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    
    item_desc:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    order_id:{
        type: DataTypes.BIGINT,
        foreignKey: true,
    },
});

Items.associate = (models) => {
    Items.belongsTo(models.Orders,{
        foreignKey:'order_id', as: "order_id", 
    })
}

Items.sync();

module.exports = Items