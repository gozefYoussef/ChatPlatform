const express = require('express')

const {signUp, login} = require('./auth.controller')

const authRoute = express.Router();

authRoute.post('/signup',signUp());
authRoute.post('/login',login());

module.exports = authRoute;