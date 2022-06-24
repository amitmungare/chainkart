const express = require("express");
const cloudinary = require("..utils/cloudinary")
const {
  addCProduct,
  updateCProduct,
  deleteCProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// authorizeRoles("user"),
// isAuthenticatedUser,

router.post("/cregister", (req, res) => {
  const { name, desc, cin, postalcode, imagec, imagep } = req.body;
  //upload image to cloudinary
  try{
      if(imagep){
          const uploadRes = await cloudinary.uploader.upload(imagep, imagec, {
              upload_presets: "pan-card",
              upload_presets: "cheque"

          })

          if(uploadRes){
              const product = new Product({
                  name,
                  desc, 
                  cin,
                  postalcode,
                  imagep: uploadRes,
                  imagec: uploadRes


              });
              const savedProduct = await product.save();

              res.status(200).send(savedProduct);
          }


  }


  }catch(error){
      console.log(error);
      res.status(500).send(error);

  }
});

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

  router.get("/", async(req,res)=>{
      try{
        const products = await Product.find()
        res.status(200).send(products)
      }
      catch(error){
          res.status(500).send(error);
      }
  
  })
module.exports = router;