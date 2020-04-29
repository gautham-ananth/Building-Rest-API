const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json())

//Routes in routes folder
//Import Routes
const postRoute = require('./routes/posts')

//Middleware to run the post routes
app.use('/posts', postRoute);


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, () => {
        console.log("Connected to DB");
    })


//Listen to the server
app.listen(3000);
