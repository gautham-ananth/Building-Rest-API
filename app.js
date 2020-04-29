const express = require('express');
var app = express();

//Middleware
app.use('/posts', (req, res) => {
    console.log("Middleware running");
    res.send("Success");
})

//Routes
app.get("/", (req, res) => {
    res.send("Response from the server will be displayed in the browser");
})


//Listen to the server
app.listen(3000);
