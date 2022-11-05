const router = require('express').Router();
const User = require('../models/User')

const CryptoJS = require("crypto-js");//to hash passwords

const jwt = require("jsonwebtoken");
//JWT is used for authorization in CRUD operations.
//Whenever we want to say delete a photo from an account
//then we need to make sure that the one deleting that is the
//owner of the account and anybody else.
//For this JWT makes a secret token and sends to the user on login step.
//Then on every CRUP operation the user sends this token.
//If the token wasn't tempered the operation is performed.
//Else we will know that somebody else tried to do some malicious
//activity

//registering process
router.post('/signup', async (req, res) => {
    //making newUser using User Schema and filling details from form in frontend
    //once we get data we save it to our db
    //as it will take some time to store in db we use async await function
    //so we make our function async and call await on saving user
    //once saved we can send the user details to frontend
    //we use try catch to catch any errors in saving in db

    //we dont save password like this so we will use cryptojs to hash password
    //before saving. We hash before saving and while checking we decryot the
    //the stored password and compare with the one entered in frontend
    const newUser = new User({
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        dob : req.body.dob,
        password : CryptoJS.AES.encrypt(
                                req.body.password, 
                                process.env.PASSWORD_SECRET )
                                .toString(),
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({
            email : req.body.email
        });

        !user && res.status(401).json("Wrong credentials no such email");

        // console.log(user);
        const ogPassword = CryptoJS.AES.decrypt(
                                            user.password,
                                            process.env.PASSWORD_SECRET)
                                            .toString(CryptoJS.enc.Utf8);
        
        // console.log(ogPassword);
        ogPassword !== req.body.password && res.status(401).json("Wrong credentials");
    
        //Here we dont wanna send password to the frontend else there are
        //chances to decrypt it. Thus we destructiure the object into
        //password and ither info from the user and send only the other 
        //info that is except password

        //Mongo stores our users info in the _doc variable of the user object.
        //So we cant directly remove password from user object rather we need to
        //remove / extract it from user._doc object of user object

        //Now when one has successfully loged in we give them a JWT
        //We give id and isAdmin property of the object as payload.
        //So while checking JWT we can see the ID is same as the one
        //doing the operation or else if he is an admin he can perform
        //any operation.
        //The next thing to provide is the secret key for encryption
        //The secret key is stored in our .env file
        //The next thing we provide is the period till the token is valid.
        //We gave 3 days which means after that the token wont be valid
        //and thus the user must login again to get a new token
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin : user.isAdmin,
        }, process.env.JWT_SECRET_KEY,
        {expiresIn : "3d"}
        );


        const {password, ...otherInfo} = user._doc;
        res.status(200).json({...otherInfo, accessToken});

    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})
module.exports = router