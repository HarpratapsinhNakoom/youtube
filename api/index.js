//-----------Importing dependencies-------------

const mongoose = require('mongoose'); //-----------Importing Mongoose
const PORT = 5000; //-----------PORT for server
const dotenv = require('dotenv'); //------------dotenv for secrecy
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const payRoute = require('./routes/stripe')
const cors = require('cors')

dotenv.config();

//------------Making express server-------------
const express = require('express');
const app = express();


//------------Connecting to mongodb through mongoose
mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log('DB connected')
}).catch((err) => {
    console.log(err);
})

app.use(express.json()); //------------Allows us to send and recieve JSON data
app.use(cors());
//--------------Creating routes----------------

//User CRUD operation routes
app.use('/api/users', userRoute)

//Product CRUD Operation routes
app.use('/api/products', productRoute)

//Cart CRUD Operation routes
app.use('/api/carts', cartRoute)

//Order CRUD Operation routes
app.use('/api/orders', orderRoute)

//authentication routes
app.use('/api/auth', authRoute)

//payment Routes
app.use('/api/checkout', payRoute )

//--------------Making server listen on PORT----------------
app.listen(PORT, () => {
    console.log('Server running. Listening on port ',PORT);
}) 


// pk_test_51LvHTiSA3uyhCrsARjPhDaKzEOLx6c1xoByulv339Y91wK9gpDAmtrRUTEgxM7g0QzHSMnXOQbeb8R3yO8utNJor00LALCkNmH