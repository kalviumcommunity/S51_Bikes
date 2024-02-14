const express = require('express')
const app = express()
app.get('/ping',(req,res)=>{
    res.send("Hello World")
})
app.listen(3000,()=>{
    console.log("Starting server ...")
})
