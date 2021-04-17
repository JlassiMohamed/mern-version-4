const express = require("express");
const router = express.Router();
const { getItemsCart, getItemCart } = require("../controllers/cart");
const isAuth = require("../middlewares/auth_jwt");

router.get("/", getItemsCart);
router.get("/:id", getItemCart);

module.exports = router;
