// const dotenv = require("dotenv").config();

// const account_sid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;

// const twilio = require('twilio')(account_sid,authToken);


// const sendSms = async (body) =>{
//     let msgOption = {
//         from : process.env.FROM_NUMBER,
//         to :process.env.to.TO_NUMBER,
//         body
//     }

//     try {
//         const message = await twilio.messages.create(msgOption)
//         console.log(message)
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = sendSms