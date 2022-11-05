const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Cart = require('../models/Cart')
const { verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin } = require("./verifyToken")
//before proccedding with the CRUD operation we need to check jwt.
//So we call a middleware function to verify the token

//---------CREATE CART----------

router.post("/add_to_cart", verifyToken,async (req, res) => {
    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    }catch(err) {
        res.status(500).json(err);
    }
})
//---------UPDATING CART-----------
router.put("/update_cart/:id",verifyTokenAndAuthorization, async (req,res) => {
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})

        res.status(200).json(updatedCart);
    }catch(err) {
        res.status(500).json(err);
    }
});

//-------------DELETING CART--------------
router.delete("/delete_cart/:id", verifyTokenAndIsAdmin, async (req,res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("DELETED Cart");
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------get user cart method--------------
router.get("/find_cart/:id", verifyTokenAndAuthorization, async (req,res) => {
    try{
        const cart = await Cart.findOne({email : req.params.id});
        res.status(200).json(cart);
    }catch(err) {
        res.status(500).json(err)
    }
})

router.get('/', verifyTokenAndIsAdmin, async (req, res) => {
    try{
        const allCarts = Cart.find();
        res.status(200).json(allCarts)
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------GET Cart STATS----------
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