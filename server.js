require("dotenv").config()
const mongoose = require("mongoose")
const {connect,isconnected}=require("./database")


const express = require('express')
const app = express()
connect()

app.get('/',(req, res)=>{
    res.send(`${isconnected?"connected":"disconnected"}`)
})

app.get('/ping',(req,res)=>{
    res.send("pong")
})

mongoose.connection.once('open', () => {
    console.log('MongoDB connection successful');
    if (require.main === module) {
        app.listen(3000, () => {
            console.log('Starting server ...');
        });
    }
});

module.exports = app;