const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  address: { type: String, required: true },
  status: { type: String, default: "placed", required: true },
  imageUrl: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  seller: [{ type: Schema.Types.ObjectId, ref: "seller" }],
});

module.exports = Order = model("order", orderSchema);

// status=["placed", "cancelled", "accepted", "completed", "out for delivery",]
