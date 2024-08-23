const User = require("../models/userModel");
const jwt = require('jsonwebtoken');


const handleUserSignup = async(req,res) =>{
    const { name, email, password } = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const user = await User.create({
            name,
            email,
            password,
        });
        await user.save();

        // Generate JWT
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});

        res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        });
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
} 

const handleUserLogin = async(req,res) =>{
    const { email, password} = req.body;
    try{
       const user = await User.findOne({email});
       if(!user){
          return res.status(400).json({message: "Invalid credentials"})
       }
       const isMatch = await user.matchPassword(password);
       if(!isMatch){
        return res.status(400).json({message: 'Invalid credentials'});
       }

       const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
       res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
           token
       });
    }
    catch(error){
        res.status(500).json({message:'Server error'});
    }
} 

module.exports = {handleUserSignup, handleUserLogin};