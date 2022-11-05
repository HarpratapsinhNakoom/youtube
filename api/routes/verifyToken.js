//This file will be used everytime a crud operation is performed.
//We will first call this file to verify the sent token by the user
//and then procced

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err) {
                res.status(403).json("TOKEN ISN'T VALID");
            }

            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("NOT AUTHENTICATED");
    }
}

//As we will have to check for id and isAdmin everytime we make it a function
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user.isAdmin || req.user.id === req.params.id) {
            next();
        }else{
            res.status(403).json("NOT ALLOWED TO DO THIS ACTION");
        }
    })
}

//For adding products we need to check whether he is an admin
const verifyTokenAndIsAdmin = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("NOT ALLOWED TO DO THIS ACTION");
        }
    })
}

module.exports = {verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin
}

// k2gmail- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTBmZmVjOGIwNjJjMzlkNDk0ZDIxNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjYyNTI3OTMsImV4cCI6MTY2NjUxMTk5M30.PNTp89d48EK78av7tDA6uWGQH32b8Wlr8aT2lbGqM80

//k2gmail obj id - 6350ffec8b062c39d494d217