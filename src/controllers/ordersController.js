const Orders = require("../models/orders");

const createOrder = async (req, res) => {
    const { order_total, order_type } = req.body

    try {
        const order = await Orders.create({
            order_total,
            order_type,
        })
        
        res.status(201).send(order);
        console.log(`Pedido ${order.order_id} criado`)
    } catch (error){
        res.status(500).send({
            mesage:error.mesage
        })
    }
};

module.exports = {
    createOrder,
    
}