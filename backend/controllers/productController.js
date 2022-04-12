const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeature = require("../utils/apifeatures");


// create product 
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
});

// get all products 
exports.getAllProducts = catchAsyncErrors(async(req,res) => {

    const resultPerPage =10;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productCount
    });
});

// get product details 

exports.getProductDetails =catchAsyncErrors(async(req,res, next)=>{

    const product = await Product.findById(req.params.id);
    const productCount = await Product.countDocuments();

    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product,
        productCount
    })
    
});


// update product
exports.updateProduct = catchAsyncErrors(async(req,res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHander("Product not found", 500));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
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
        return next(new ErrorHander("Product not found", 500));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    })
});


