const asyncHandler = require("express-async-handler");
const User = require("../dbModels/userModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler ( async (req,res)=>{
    const {name,email,password}= req.body;

    if(!email||!name||!password){
        res.send("Enter All Fields")
    }

    const findUser = await User.findOne({email});
    
    if(findUser){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const createNewUser = await User.create({
        email,
        name,
        password : hashedPassword
    })

    res.status(200).send(createNewUser)

})

const loginUser = asyncHandler( async (req,res)=>{

    const {email,password} = req.body;

    if(!email||!password){
        res.send("Enter All Fields")
    }

    const findUser = await User.findOne({email});

    if(findUser && (await bcrypt.compare(password,findUser.password))){
        const accessToken = jwt.sign(
            {
                user : findUser
            },
            process.env.USER_TOKEN,
            {expiresIn : "1d"}
            )

            res.status(201).json({accessToken})
    }

})


module.exports = {registerUser,loginUser}