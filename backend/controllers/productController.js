const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("../utils/cloudinary");
const Company = require("../models/companyModel");
// create product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const { name, price, desc, category, subCategory, pImage, cEmail } = req.body;

  const uploadProduct = await cloudinary.uploader.upload(pImage, {
    folder: `${category}`,
  });
  const productUrl = uploadProduct.url;
  const data = {
    name,
    price,
    desc,
    category,
    subCategory,
    pImage: productUrl,
    cEmail,
  };
  const product = await Product.create(data);

  res.status(201).json({
    success: true,
    product,
  });
});

// get all products

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const { cEmail } = req.body;
  const products = await Product.find({ email: cEmail }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return data;
    }
  });
  res.status(200).json({
    success: true,
    products,
  });
});

// exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
//   Product.find({ name: "bata" }, (err, data) => {
//     console.log(h);
//   });
//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return next(new ErrorHander("Product not found", 404));
//   }

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

// update product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
