const Orders = require("../models/orders");
const Items = require("../models/items")
const createOrder = async (req, res) => {
    console.log(req.body)
    const { order_totalAmount, order_type } = req.body

    try {
        const order = await Orders.create({
            order_totalAmount,
            order_type,
        })
        
        res.status(201).send(order);
        console.log(`Pedido ${order.order_id} criado`)

        const items = [
            {
            item_price: 20,
            
            item_desc: 'Banana',
            order_id: order.order_id,
        }, 
            {
            item_price: 30,
            
            item_desc: 'Maçã',
            order_id: order.order_id,
        }, 
        ]
    } catch (error){
        console.log('h1', error)
        res.status(500).send({
            mesage:error.message
        })
    }
};

module.exports = {
    createOrder,
    
}