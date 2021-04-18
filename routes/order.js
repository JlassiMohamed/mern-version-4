const express = require("express");
const {
  placeOrder,
  getOrders,
  getOrder,
  updateOrder,
  removeOrder,
} = require("../controllers/order");
const router = express.Router();

router.post("/", placeOrder);
router.get("/", getOrders);
router.get("/:id", getOrder);
router.put("/:id", updateOrder);
router.delete("/:id", removeOrder);

module.exports = router;
