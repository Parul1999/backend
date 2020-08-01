const express= require('express')
const app=express()
const prod=require('./product')
app.use('/product',prod)
module.exports=app