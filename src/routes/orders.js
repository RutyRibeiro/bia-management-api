const router = require("express").Router();
const controller = require("../controllers/ordersController");

router.post("/",controller.createOrder)

module.exports = router