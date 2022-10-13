const mongoose = require ("mongoose")

async function connectionToDatabase (){
    let uri='mongodb://127.0.0.1:27017/local'
    try {
        await mongoose.connect(uri);
        console.log("connected")
    } catch (error) {
        console.log("could not connect")
        throw error
    }
}

module.exports =connectionToDatabase;