const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui');
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

const tutorialpostRoutes = require('./routes/TutorialRoutes');
app.use("/",tutorialpostRoutes);
//middleware 
app.use(morgan("dev"));     
app.use(expressValidator());
app.use(myOwnMiddleware);

const port = process.env.PORT || 3200;
app.listen(port,()=> {
    console.log(`The server is running on port : ${port}`);
});