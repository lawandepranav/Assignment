const mongoose = require ("mongoose")
const user = require("./user")

const todoSchema = new mongoose.Schema({
title : String,
status: Boolean,
lable:String,
user:{
    type:mongoose.Types.ObjectId,
    ref:user
}
},{
    timestamps:true
})

const todo = mongoose.model("todo",todoSchema)

module.exports = todo