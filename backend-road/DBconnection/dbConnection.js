const mongoose = require('mongoose');


const Connectdb = async ()=>{
     
    try {
        const connectionDB  = await mongoose.connect(process.env.DBCONNECTION)
        console.log(`Host ${connectionDB.connection.host}, Name ${connectionDB.connection.name}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = Connectdb