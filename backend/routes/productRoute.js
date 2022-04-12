const express = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProductDetails 
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// authorizeRoles("user"), 
// isAuthenticatedUser,
router.route("/products").get( getAllProducts);
router.route("/product/new").post( createProduct);
router
    .route("/product/:id")
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProductDetails);


module.exports =router;