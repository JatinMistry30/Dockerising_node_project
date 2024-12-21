const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config();



app.get('/home',(req,res)=>{
    res.json({message:"ok"})
})

app.listen(process.env.PORT,() =>{
    console.log("Server is running")
})