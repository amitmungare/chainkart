const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Company = require("../models/companyModel");
const { default: axios } = require("axios");
// create product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const { name, price, desc, category, subCategory, pImage, cName, cEmail } =
    req.body;

  // const uploadProduct = await cloudinary.uploader.upload(pImage, {
  //   folder: `${category}`,
  // });
  // const productUrl = uploadProduct.url;
  const data = {
    name,
    price,
    desc,
    category,
    subCategory,
    pImage,
    cName,
    cEmail,
  };
  const product = await Product.create(data);

  // let data2 = JSON.stringify({
  //   chain: "ETH",
  //   to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
  //   url: `http://127.0.0.1:3000/${category}/${subCategory}/${product._id}`,
  //   tokenId: "ASSET_UNIT",
  // });

  // let config = {
  //   method: "post",
  //   url: "https://api-eu1.tatum.io/v3/nft/mint",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-api-key": "bd61d9f4-9870-4e45-97ec-fe222523455e",
  //     "x-testnet-type": "ethereum-ropsten",
  //   },
  //   data: data2,
  // };

  // const res1 = await axios(config);
  // const txId = {
  //   tokenID: res1.data.txId,
  // };

  // await Product.findByIdAndUpdate(product._id, txId, {
  //   new: true,
  //   runValidators: true,
  // });

  res.status(201).json({
    success: true,
    product,
  });
});

// get all products

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const { cEmail } = req.body;
  const products = await Product.find({ cEmail });
  res.status(200).json({
    success: true,
    products,
  });
});

exports.getProductsBySubCat = catchAsyncErrors(async (req, res, next) => {
  const { subCategory } = req.body;
  const products = await Product.find({ subCategory });
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
  console.log(req.params.id);
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
