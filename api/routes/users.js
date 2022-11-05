const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin } = require("./verifyToken")
//before proccedding with the CRUD operation we need to check jwt.
//So we call a middleware function to verify the token

//---------UPDATING USER-----------
router.put("/update_user/:id",verifyTokenAndAuthorization, async (req,res) => {
    //if the user has changes the password we need to handle
    //it as we will be storing the hashed password
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASSWORD_SECRET )
            .toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})

        res.status(200).json(updatedUser);
    }catch(err) {
        res.status(500).json(err);
    }
});

//-------------DELETING USER--------------
router.delete("/delete_user/:id", verifyTokenAndAuthorization, async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("DELETED USER");
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------get user method--------------
router.get("/find_user/:id", verifyTokenAndIsAdmin, async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...otherInfo} = user._doc;
        res.status(200).json(otherInfo);
    }catch(err) {
        res.status(500).json(err)
    }
})

//-----------get all user info----------------
router.get("/", verifyTokenAndIsAdmin, async (req,res) => {
    const query = req.query;
    //if a query is sent such that to get only the latest n users
    //then we use that query to get only the first n elements and sort them based on
    //latest entry got in db
    try{
        const user = query.new ?
            await User.find().sort({_id : -1}).limit(1) //sorting based on indices in reversed manner and then limiting to first 5 elements
            : await User.find();
        // const user = await User.find()
        res.status(200).json(user);
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------GET USER STATS----------
//Getting stats on number of users per month for the last one year
// router.get("/stats", verifyTokenAndIsAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try{
//         const data = await User.aggregate([
//             {$match : {
//                 createdAt:{$gte : lastYear}
//             }},
//             {
//                 $project: {
//                 month : {$month : "$createdAt"}
//                 }
//             },
//             {
//                 $group : {
//                     _id: "$month",
//                     total : {$sum : 1}
//                 }
//             }
//         ]);

//         res.status(200).json(data)
//     }catch(err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router