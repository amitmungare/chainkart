const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

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

userSchema.pre("save", async function (next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJWTToken =function(){
    return jwt.sign({ id :this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}



module.exports = mongoose.model("User", userSchema);