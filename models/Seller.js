const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const sellerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
  address: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: { type: String, required: true },
  minOrderAmount: Number,
  id_seller: { type: Schema.Types.ObjectId, ref: "user" },
  items: [{ type: Schema.Types.ObjectId, ref: "item" }],
});

module.exports = Seller = model("seller", sellerSchema);
