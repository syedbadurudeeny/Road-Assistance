const asyncHandler = require("express-async-handler");
const Admin = require("../dbModels/adminModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = asyncHandler ( async (req,res)=>{
    const {email,name,password}= req.body;

    if(!email||!name||!password){
        res.send("Enter All Fields")
    }

    const findAdmin = await Admin.findOne({email});
    
    if(findAdmin){
        res.status(400)
        throw new Error("Admin Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const createNewAdmin = await Admin.create({
        email,
        name,
        password : hashedPassword
    })

    res.status(200).send(createNewAdmin)

})

const loginAdmin = asyncHandler( async (req,res)=>{

    const {email,password} = req.body;

    if(!email||!password){
        res.send("Enter All Fields")
    }

    const findAdmin = await Admin.findOne({email});

    if(findAdmin && (await bcrypt.compare(password,findAdmin.password))){
        const accessToken = jwt.sign(
            {
                user : findAdmin
            },
            process.env.ADMIN_TOKEN,
            {expiresIn : "1d"}
            )

            res.status(201).json({accessToken})
    }

})


module.exports = {registerAdmin,loginAdmin}