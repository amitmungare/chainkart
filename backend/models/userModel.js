const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength:30,
        minLength:4
    },
    email:{
        type: String,
        required: true,
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type: String,
        required: true,
        minLength:8,
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
});

module.exports = mongoose.model("User", userSchema);