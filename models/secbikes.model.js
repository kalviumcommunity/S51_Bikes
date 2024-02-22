const mongoose = require("mongoose");

const BikesSchema = new mongoose.Schema({
    Brand: { type: String },
    Model: { type: String },
    Year:{ type: Number},
    Price : {type : Number},
    Condition : {type : String},
    Mileage : {type : Number},
    Location :{type : String},
    Seller : {type : String},
},
);



module.exports = mongoose.model("second hand bikes", BikesSchema);