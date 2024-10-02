const express = require("express");
const Connectdb = require("./DBconnection/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");


const PORT = process.env.PORT || 5001
Connectdb()



app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api/user',require('./routerAssistance/userRouter'))
app.use('/api/driver',require('./routerAssistance/driverRouter'))
app.use('/api/admin',require('./routerAssistance/adminRouter'))

app.use("/api/message",require("./routerAssistance/messageRouter"))



app.listen(PORT, ()=> console.log(`Server conected to the port of ${PORT}`));