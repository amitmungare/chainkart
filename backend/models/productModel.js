const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pImage: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  // company: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Company",
  // },
});

module.exports = mongoose.model("Product", productSchema);
