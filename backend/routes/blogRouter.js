// blogRoute.js

const router = require("express").Router();
const { createBlogPost } = require("../controllers/blogController.js");

// Route to create a new blog post
router.post("/blog", createBlogPost);

module.exports = router;
