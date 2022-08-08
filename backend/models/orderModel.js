const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        cartQuantity: {
          type: Number,
          required: true,
        },
        pImage: {
          type: String,
          required: true,
        },
        cEmail: {
          type: String,
          required: true,
        },

        //   product: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: "Product",
        //     required: true,
        //   },
      },
    ],
    uName: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    //   paymentInfo: {
    //     id: {
    //       type: String,
    //       required: true,
    //     },
    //     status: {
    //       type: String,
    //       required: true,
    //     },
    //   },

    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
