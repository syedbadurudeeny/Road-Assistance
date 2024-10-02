const asyncHandler = require("express-async-handler");
const Driver = require("../dbModels/driverModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");

const registerDriver = asyncHandler ( async (req,res)=>{
    const {email,name,password}= req.body;

    if(!email||!name||!password){
        res.send("Enter All Fields")
    }

    const findDriver = await Driver.findOne({email});
    
    if(findDriver){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const createNewDriver = await Driver.create({
        email,
        name,
        password : hashedPassword
    })

    res.status(200).send(createNewDriver)

})

const loginDriver = asyncHandler( async (req,res)=>{

    const {email,password} = req.body;

    if(!email||!password){
        res.send("Enter All Fields")
    }

    const findDriver = await Driver.findOne({email});

    if(findDriver && (await bcrypt.compare(password,findDriver.password))){
        const accessToken = jwt.sign(
            {
                driver : findDriver
            },
            process.env.DRIVER_TOKEN,
            {expiresIn : "1d"}
            )

            res.status(201).json({accessToken})
    }

})


module.exports = {registerDriver,loginDriver}