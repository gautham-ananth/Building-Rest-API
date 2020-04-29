const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get("/", (req, res) => {
    res.send("Response from the server will be displayed in the browser");
})

router.post("/", (req, res) => {
    // console.log(req.body);//install body parser to pare the req body
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log("post :", JSON.stringify(post));

    //store in database
    post.save()
        .then(
            data => {
                console.log("Success! Post done");
                res.json(data);
            })
        .catch(error => {
            console.log("Error:500")
            res.json({ message: error })
        })

})

module.exports = router;