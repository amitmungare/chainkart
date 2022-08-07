const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
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
    cName: {
      type: String,
      required: true,
    },
    cEmail: {
      type: String,
      required: true,
    },
    tokenID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
