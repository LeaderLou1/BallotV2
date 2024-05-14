const Post = require("../models/Post");

const postsControllers = {
  create: async (req, res) => {
    const { user_id, content } = req.body;
    try {
      const post = await Post.create(user_id, content);
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

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Post.delete(id);
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
