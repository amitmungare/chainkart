const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Company = require("../models/companyModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("../utils/cloudinary");
// register a company
exports.registerCompany = catchAsyncErrors(async (req, res, next) => {
  let { name, email, cin, postalCode, imagep, imagec } = req.body;
  console.log(name);
  try {
    if (imagep && imagec) {
      const uploadPan = await cloudinary.uploader.upload(imagep, {
        folder: "panCard",
      });
      const panCard = uploadPan.url;
      imagep = panCard;
      const uploadCheq = await cloudinary.uploader.upload(imagec, {
        folder: "blankCheque",
      });
      const blankCheque = uploadCheq.url;
      imagec = blankCheque;

      if (uploadPan && uploadCheq) {
        const company = await Company.create({
          name,
          email,
          cin,
          postalCode,
          imagep,
          imagec,
        });

        sendToken(company, 201, res);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// login company
exports.loginCompany = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "Enter email" });
  }

  const company = await Company.findOne({ email }).select("+password");
  // console.log(company);

  if (!company) {
    return res.json({ message: "User not found" });
  }

  const isPasswordMatched = await company.comparePassword(password);
  console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    return res.json({ message: "Wrong password" });
  }

  sendToken(company, 200, res);
});

// logout company

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
  const company = await Company.findOne({ email: req.body.email });

  if (!company) {
    return next(new ErrorHander("company not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = company.getResetPasswordToken();

  await company.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: company.email,
      subject: `ChainKart Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${company.email} successfully`,
    });
  } catch (error) {
    company.resetPasswordToken = undefined;
    company.resetPasswordExpire = undefined;

    await company.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

//   reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const company = await Company.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!company) {
    return next(new ErrorHander("token invalid or expired", 400));
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  company.password = req.body.password;
  company.resetPasswordToken = undefined;
  company.resetPasswordExpire = undefined;

  await company.save();

  sendToken(company, 200, res);
});

// get company detail
exports.getCompanyDetails = catchAsyncErrors(async (req, res, next) => {
  const company = await Company.findById(req.company.id);
  res.status(200).json({
    success: true,
    company,
  });
});

// update company password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const company = await Company.findById(req.company.id).select("+password");

  const isPasswordMatched = await company.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("old password not matched", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  company.password = req.body.newPassword;

  await company.save();

  sendToken(company, 200, res);
});

// update company profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newCompanyData = {
    name: req.body.name,
    email: req.body.email,
  };

  const company = await Company.findByIdAndUpdate(
    req.company.id,
    newCompanyData,
    {
      new: true,
      runValidators: true,
      companyFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// get all companys (admin)
exports.getAllCompany = catchAsyncErrors(async (req, res, next) => {
  const companys = await Company.find();
  res.status(200).json({
    success: true,
    companys,
  });
});

// get single company (admin)
exports.getSingleCompany = catchAsyncErrors(async (req, res, next) => {
  const company = await Company.findById(req.params.id);

  if (!company) {
    return next(
      new ErrorHander(`company dose not exist with id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    company,
  });
});

// delete company --admin
exports.deleteCompany = catchAsyncErrors(async (req, res, next) => {
  const company = await Company.findById(req.params.id);

  if (!company) {
    return next(
      new ErrorHander(`company dose not exist with id: ${req.params.id}`, 400)
    );
  }

  await company.remove();

  res.status(200).json({
    success: true,
    message: "company deleted successfully",
  });
});
