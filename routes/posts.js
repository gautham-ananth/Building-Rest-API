const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get("/", (req, res) => {
    res.send("Response from the server will be displayed in the browser");
})

router.post("/", (req, res) => {
    console.log(req.body);//install body parser to pare the req body
})

module.exports = router;