const mongoose = require("mongoose");


//----Making user schema model for database----

const userSchema = new mongoose.Schema(
    {
        firstname : {type : String, required : true},
        lastname : {type : String, required : true},
        email : {type:String, required : true, unique : true},
        password : {type : String, required : true},
        dob : {type : String, required : true},
        isAdmin:{
            type:Boolean,
            default : false
        }
    },
    {
        timestamps:true
        //--will automatically do created and updated times
    }
)

module.exports = mongoose.model("User", userSchema);