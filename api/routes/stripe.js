const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//stripe is used for onlinr payments.
//You send information from frontend to server to ask for a link for
//stripe to handle the payments.
//Stripe takes the amount and other info
//and does the payment process for you

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        //stripe generates a tokenId on payment which will be
        //used by bus here
        amount: req.body.amount,
        currency: 'INR'
    }, (StripeErr, StripeRes) => {
        if(StripeErr){
            res.status(500).json(StripeErr);
        }else{
            res.status(200).json(StripeRes);
        }
    })
})

module.exports = router;