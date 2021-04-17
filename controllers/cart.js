const Item = require("../models/Item");

exports.getItemsCart = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getItemCart = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    // console.log(item);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// https://github.com/devat-youtuber/mern-ecommerce/tree/29f1540e0c29dcba386dbc39af109430069fd14d
