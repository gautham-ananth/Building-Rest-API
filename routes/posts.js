const express = require('express');
const router = express.Router();
const Post = require('../models/post');


//get back all posts
router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    }
    catch (err) {
        res.json({ message: err })
    }
})

//submit a post
router.post("/", async (req, res) => {
    // console.log(req.body);//install body parser to pare the req body
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log("post :", JSON.stringify(post));

    //store in database
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    }
    catch (err) {
        res.json({ message: err })
    }


})

//get back specific post
router.get("/:postId", async (req, res) => {
    // console.log("Params : ", req.params.postId);
    try {
        const singlePost = await Post.findById(req.params.postId);
        res.json(singlePost);
    }
    catch (err) {
        res.json({ message: err })
    }
})

//delete a single post
router.delete("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    }
    catch (err) {
        res.json({ message: err })
    }
})

//update a post
router.patch("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(removedPost);
    }
    catch (err) {
        res.json({ message: err })
    }
})
module.exports = router;