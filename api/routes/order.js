const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Order = require('../models/Order')
const { verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin } = require("./verifyToken")
//before proccedding with the CRUD operation we need to check jwt.
//So we call a middleware function to verify the token

//---------CREATE ORDER----------

router.post("/add_order", verifyToken,async (req, res) => {
    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    }catch(err) {
        res.status(500).json(err);
    }
})
//---------UPDATING ORDER-----------
router.put("/update_order/:id",verifyTokenAndIsAdmin, async (req,res) => {
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})

        res.status(200).json(updatedOrder);
    }catch(err) {
        res.status(500).json(err);
    }
});

//-------------DELETING ORDER--------------
router.delete("/delete_order/:id", verifyTokenAndIsAdmin, async (req,res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("DELETED Order");
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------get user order method--------------
router.get("/find_order/:id", verifyTokenAndAuthorization, async (req,res) => {
    try{
        const orders = await Order.findOne({email : req.params.id});
        res.status(200).json(orders);
    }catch(err) {
        res.status(500).json(err)
    }
})

router.get('/', verifyTokenAndIsAdmin, async (req, res) => {
    try{
        const allOrders = Order.find();
        res.status(200).json(allOrders)
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