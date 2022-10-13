const express = require("express");
const cors = require ("cors")
const connectionToDatabase= require('./Database/index');
const setUser=require('./Handlers/users')



const app = express()
app.use(express.json())
app.use(cors())


connectionToDatabase().then(()=>{
    app.listen(3030,()=>{
        console.log("Server is running in 3030 port")
    })
})