const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    pImages:[
        { 
            type:String,
            required:True,
        }
    ],
    category:{
        type:String,
        required:True,
    },
    subcategory:{
        type:String,
        required:True,
    }
})


module.exports =mongoose.model("Product", productSchema)