const knex = require("../knex");
const Post = require("../db/models/Post");

exports.createPost = async (req, res) => {
    try {
        const { contents, userId } = req.body;

        if (!contents || !userId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const [postId] = await knex("posts").insert({ contents, user_id: userId });

        const newPost = await Post.query().findById(postId);

        res
            .status(201)
            .json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
    }
};
