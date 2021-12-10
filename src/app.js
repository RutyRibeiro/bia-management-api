const app = express();
const cors = require("cors");
const express = require("express");
const index = require("./routes");
const orders = require("./routes/orders")

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Accessf-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(cors());
app.use("/", index);
app.use("/orders", orders);

module.exports = app;