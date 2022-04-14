const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const sendEmail = require("../utils/sendEmail");


// create product 
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });


});

// get all products 
exports.getAllProducts = catchAsyncErrors(async(req,res, next) => {

    const resultPerPage =10;
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    let products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productsCount,
    });
});

// get product details 

exports.getProductDetails =catchAsyncErrors(async(req,res, next)=>{

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product
    })
    
});


// update product
exports.updateProduct = catchAsyncErrors(async(req,res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success: true,
        product
    })

});


// Delete Product

exports.deleteProduct = catchAsyncErrors(async(req,res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    })
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      return next(new ErrorHander("User not found", 404));
    }
  
    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();
  
    await user.save({ validateBeforeSave: false });
  
    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/password/reset/${resetToken}`;
  
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
