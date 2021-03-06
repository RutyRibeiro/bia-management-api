const cors = require("cors");
const express = require("express");
const orders = require("./routes/orders")



const app = express();
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Accessf-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json())
app.use(cors());
app.use("/orders", orders);

module.exports = app;