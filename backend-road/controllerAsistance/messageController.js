const asyncHandler = require('express-async-handler');
const twilio = require('twilio');

const  sendSms = (req,res) => {

    const {content,to} = req.body;

    if(!content || !to) {
        res.status(400);
        throw new Error("All Fields Are Not Empty");
    }

    const client = new twilio(process.env.ACCOUNT_SID , process.env.AUTH_TOKEN)
    console.log(client)
    return client.messages
    .create({body:content, from: '+14159928847' , to: `+91${to}` })
    .then(message => {
        console.log(message,"message sent");
    })
    .catch(err =>{
        console.log(err,"message not sent");
    })
    
}



module.exports = {sendSms}