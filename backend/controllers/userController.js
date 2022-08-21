const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const User = require("../models/userModel");
const User = require("../models/userModel.js");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const Company = require("../models/companyModel");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { default: axios } = require("axios");

// register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  let walladdress;
  // console.log(req.body);
  const {
    firstname,
    lastname,
    email,
    password,
    hnumber,
    city,
    landmark,
    state,
    pincode,
  } = req.body;

  // const randomnumber = (Math.random() * 1000000).toPrecision(6);

  // let config = {
  //   method: "get",
  //   url: `https://api-eu1.tatum.io/v3/ethereum/address/xpub6EsA7Hze8MkBV597dpcUz9hekiqRG5KtqKJuw8hbpixLs1ZhdsdTZCN53a5Mb96VoWTF3xWuumh7uKRuzJNPUH7aCvJ5LrGfwhhFFm5aSUW/${randomnumber}`,
  //   headers: {
  //     "x-api-key": "bd61d9f4-9870-4e45-97ec-fe222523455e",
  //     "x-testnet-type": "ethereum-ropsten",
  //   },
  // };
  // let ress = await axios(config);

  // walladdress = ress.data.address;

  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
    hnumber,
    city,
    landmark,
    state,
    pincode,
  });

  sendToken(user, 201, res);
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHander("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  // console.log(user);

  if (!user) {
    // return next(new ErrorHander("Invalid email or password", 401));
    return res.json({ message: "User not found" });
    // Shreyas
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return res.json({ message: "Invalid email or password" });
  }

  sendToken(user, 200, res);
});

// logout User

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out",
  });
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `ChainKart Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

//   reset password

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHander("token invalid or expired", 400));
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// get user detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

// update user password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("old password not matched", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update user profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    hnumber: req.body.hnumber,
    city: req.body.city,
    landmark: req.body.landmark,
    state: req.body.state,
    pincode: req.body.pincode,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// get all users (admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

// get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User dose not exist with id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update user role --admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  if (!user) {
    return next(
      new ErrorHander(`User dose not exist with id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
  });
});

// delete user --admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User dose not exist with id: ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

exports.updateCompanyPassword = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const hashedP = await bcrypt.hash(password, 10);

  // const newPassword = await bcrypt.hash(password, 10);
  // console.log(newPassword);

  const newCompanyPassword = {
    password: hashedP,
  };

  await sendEmail({
    email: email,
    subject: `Login Credentials`,
    message: `This is to inform that your company has been successfully verified and is ready to begin their journey on Chainkart.
      Here are the credential details: \n\n Login Idl: ${email} \n\n Password: ${password} \n\n If you have not requested this email then, please ignore it.`,
  });

  const company = await Company.findOneAndUpdate(
    { email: email },
    newCompanyPassword,
    {
      new: true,
      runValidators: true,
      userFindAndModify: true,
    }
  );

  if (!company) {
    return next(
      new ErrorHander(`company dose not exist with id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
  });
});
