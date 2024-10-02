const mongoose = require('mongoose');

const AdminModel = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Please Enter Your Name"]
    },
    email : {
        type : String,
        required : [true, "Please Enter Your Email"]
    },
    password : {
        type : String,
        required : [true, "Please Enter Your Password"]
    },
    
},{
    timestamps : true
}
)

module.exports = mongoose.model("Admin", AdminModel)