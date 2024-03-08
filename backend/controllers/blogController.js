const Blog = require("../models/blogModel");

// Controller function to create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blogPost = new Blog({ title, content });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
