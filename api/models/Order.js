const mongoose = require("mongoose");


//----Making Order schema model for database----

const orderSchema = new mongoose.Schema(
    {
        email : {type : String, required : true},
        productList : [
           {
                productID : {type : String},
                quantity : {type : Number, default : 1},
           }
        ],
        amount : {type:Number, required : true},
        userAddress : {type:Object, required : true},
        status : {type:String, default : "pending"}
    },
    {
        timestamps:true
        //--will automatically do created and updated times
    }
)

module.exports = mongoose.model("Order", orderSchema);