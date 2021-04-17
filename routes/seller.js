const express = require("express");
const isSeller = require("../middlewares/isSeller");
const {
  postSeller,
  getSellers,
  getSeller,
  deleteSeller,
  updateSeller,
} = require("../controllers/seller");
const router = express.Router();

router.post("/", isSeller, postSeller);
router.get("/", getSellers);
router.get("/:id", getSeller);
router.delete("/:id", isSeller, deleteSeller);
router.put("/:id", updateSeller);  //isSeller, 

module.exports = router;
