const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Product = require('../models/Product')
const { verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin } = require("./verifyToken")
//before proccedding with the CRUD operation we need to check jwt.
//So we call a middleware function to verify the token

//---------CREATE PRODUCT----------

router.post("/add_product", verifyTokenAndIsAdmin,async (req, res) => {
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(err) {
        res.status(500).json(err);
    }
})
//---------UPDATING PRODUCT-----------
router.put("/update_product/:title",verifyTokenAndIsAdmin, async (req,res) => {
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.title, {
            $set: req.body
        }, {new:true})

        res.status(200).json(updatedProduct);
    }catch(err) {
        res.status(500).json(err);
    }
});

//-------------DELETING PRODUCT--------------
router.delete("/delete_product/:title", verifyTokenAndIsAdmin, async (req,res) => {
    try{
        await Product.findByIdAndDelete(req.params.title);
        res.status(200).json("DELETED Product");
    }catch(err) {
        res.status(500).json(err)
    }
})

//---------get product method--------------
router.get("/find_product/:title", verifyToken, async (req,res) => {
    try{
        const product = await Product.findById(req.params.title);
        res.status(200).json(product);
    }catch(err) {
        res.status(500).json(err)
    }
})

//-----------get all products info----------------
router.get("/", verifyToken, async (req,res) => {
    const query_New = req.query.new;
    const query_Category = req.query.category;
    //if a query is sent such that to get only the latest n products
    //then we use that query to get only the first n elements and sort them based on
    //latest entry got in db

    //another query is to get products based on categories
    //so for a query_category is an array of categories we want.
    //Then we have to find all the products whose category array cosnists of
    //our query category
    try{
        let products;
        if(query_New) {
            products = await Product.find().sort({createdAt : -1}).limit(1);
        }else if(query_Category) {
            products = await Product.find({
                categories : {
                    $in : query_Category.split(" ")
                }
            })
        }else{
            products = await Product.find();
        }
        
        res.status(200).json(products);
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