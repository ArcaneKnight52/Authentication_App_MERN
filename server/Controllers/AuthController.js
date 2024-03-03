const User = require('../models/UserModel');
const { createSecretToken } = require('../SecretToken');
const bcrypt = require('bcrypt');

modules.export.Signup = async(req,res,next) =>{
    try{
        const {email,password,username,createdAt} = req.body;
        const exsistingUser = await User.findOne({enail});
        if(exsistingUser){
            return res.json({message:"User already Exists !"});
        }        
        const user = await User.create({email,password,username,createdAt});
        const token = createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res
            .status(201)
            .json({message:"User signed in succesfully",success:true,user});
            next();
    }catch(error){
        console.log(error);
    }
};