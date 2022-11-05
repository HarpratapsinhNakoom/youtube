const mongoose = require("mongoose");


//----Making Cart schema model for database----

const cartSchema = new mongoose.Schema(
    {
        email : {type : String, required : true},
        productList : [
           {
                productID : {type : String},
                quantity : {type : Number, default : 1},
           }
        ],
    },
    {
        timestamps:true
        //--will automatically do created and updated times
    }
)

module.exports = mongoose.model("Cart", cartSchema);