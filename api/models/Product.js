const mongoose = require("mongoose");


//----Making Product schema model for database----

const productSchema = new mongoose.Schema(
    {
        title : {type : String, required : true, unique : true},
        desc : {type:String, required : true},
        image : {type : String, required : true},
        categories : {type : Array},
        price : {type : Number, required : true},
        size : {type : String},
        color : {type : String}
    },
    {
        timestamps:true
        //--will automatically do created and updated times
    }
)

module.exports = mongoose.model("Product", productSchema);