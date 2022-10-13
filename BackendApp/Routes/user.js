const express = require('express');
const { registerUser,loginUser } = require('../Handlers/user');

const userRouter = express.Router();


userRouter.post('/users',registerUser)
userRouter.post('/users/login',loginUser)


module.exports = userRouter