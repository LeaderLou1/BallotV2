const Post = require("../db/models/Post");

const postsControllers = {
  create: async (req, res) => {
    const { heading, content } = req.body;
    const user_id = req.params.user_id;
    try {
      const post = await Post.create(user_id, heading, content);
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  findByUserId: async (req, res) => {
    const { user_id } = req.params;
    try {
      const posts = await Post.findByUserId(user_id);
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.getAllPosts();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  delete: async (req, res) => {
    const { user_id, post_id } = req.params;
    try {
      await Post.delete(post_id);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteAllPostsForUser: async (req, res) => {
    const { user_id } = req.params;
    try {
      await Post.deleteAllPostsForUser(user_id);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postsControllers;
