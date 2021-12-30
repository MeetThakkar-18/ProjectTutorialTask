const express = require('express');
const {getPosts,createPost} = require('../controllers/post');
const router = express.Router();
const validator = require('../validators/validate')

router.post("/post",validator.createPostValidator, createPost);

module.exports = router;


/*
exports.getPosts = (req ,res) => {
    res.send("Hello world from meet");
};
*/

//router.get("/",getPosts);