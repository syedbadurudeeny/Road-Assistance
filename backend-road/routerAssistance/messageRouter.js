const express= require('express');
const { sendSms } = require('../controllerAsistance/messageController');
const router = express.Router();


router.post('/sms',sendSms);


module.exports = router