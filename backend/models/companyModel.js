const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  cin: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },

  imagep: {
    type: String,
  },
  imagec: {
    type: String,
  },
  role: {
    type: String,
    default: "company",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// companySchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

// jwt token
companySchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// compare password
companySchema.methods.comparePassword = function (password) {
  return password;
};

// password reset token
companySchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("Company", companySchema);
