const mongoose = require('mongoose')

const connect = async() => {
    try{
        await mongoose.connect(process.env.DATABASE)
    }
    catch(err){
        console.error(err)
    }
}
const isconnected =() => mongoose.connection.readyState === 1 ? true:false
module.exports = {connect, isconnected}