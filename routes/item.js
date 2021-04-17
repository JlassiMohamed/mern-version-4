const express = require("express");
const {
  postItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require("../controllers/item");
const router = express.Router();
const isSeller = require("../middlewares/isSeller");

router.post("/", isSeller, postItem);
router.get("/", getItems);
router.get("/:id", getItem);
router.delete("/:id", isSeller, deleteItem);
router.put("/:id", isSeller, updateItem);

module.exports = router;
