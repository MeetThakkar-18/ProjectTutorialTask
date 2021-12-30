const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error',err => {
    console.log(`DB Connection error : ${err.message}`);
});

const myOwnMiddleware = (req,res,next) => {
    console.log("middleware applied");
    next();
};

const postRoutes = require('./routes/post');
//middleware 
app.use(morgan("dev"));     
app.use(expressValidator());
app.use("/",postRoutes);
app.use(myOwnMiddleware);     
const port = process.env.PORT || 3200;
app.listen(port,()=> {
    console.log(`A node js api listening : ${port}`);
});


             
//app.use(bodyParser.json())
/*
app.get("/", (req,res) => {
    res.send("Hello world from node");
});

*/
//const {getPosts} = require("./routes/post");
//app.get("/", getPosts);