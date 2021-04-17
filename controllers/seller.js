const Seller = require("../models/Seller");
const User = require("../models/User");

// { errors: [{ msg: `` }] }

exports.postSeller = async (req, res) => {
  try {
    const newSeller = new Seller({ ...req.body, id_seller: req.user._id });

    const emailUsed = await Seller.findOne({ email: newSeller.email });
    if (emailUsed) {
      res.status(400).send({
        errors: [{ msg: `seller already exists email should be unique` }],
      });
      return;
    }
    const result = await newSeller.save();
    await User.updateOne(
      { _id: req.user._id },
      { $set: { restaurant: newSeller._id } }
    );

    res.status(200).send({ msg: `seller posted`, seller: result });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: `can not save it ${error}` }] });
  }
};

exports.getSellers = async (req, res) => {
  try {
    const result = await Seller.find().populate("id_seller").populate("items");
    res.status(200).send({ msg: `getting all sellers`, sellers: result });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: `can not access data ${error}` }] });
  }
};

exports.getSeller = async (req, res) => {
  try {
    const result = await Seller.findOne({ _id: req.params.id })
      .populate("id_seller")
      .populate("items");
    // console.log(result);
    res.status(200).send({ msg: `getting the seller`, seller: result });
  } catch (error) {
    res.status(400).send({
      errors: [{ msg: `there is no contact with this id, ${error}` }],
    });
  }
};

exports.deleteSeller = async (req, res) => {
  try {
    const result = await Seller.deleteOne({ _id: req.params.id });
    !result.n
      ? res
          .status(400)
          .send({ errors: [{ msg: `seller was already deleted` }] })
      : res.status(200).send({ msg: `seller deleted`, seller: result });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: `there is no seller with this id, ${error}` }] });
  }
};

exports.updateSeller = async (req, res) => {
  try {
    const result = await Seller.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: `seller updated`, seller: result });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: `there is no seller with this id, ${error}` }] });
  }
};
