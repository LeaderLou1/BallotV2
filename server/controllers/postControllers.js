const Post = require("../db/models/Post");

const postsControllers = {
  create: (req, res) => {
    const { user_id, content } = req.body;
    const query = `
      INSERT INTO posts(user_id, content)
      VALUES (?, ?)`;

    Post.query(query, [user_id, content], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.sendStatus(201);
      }
    });
  },

  findByUserId: (req, res) => {
    const { user_id } = req.params;
    const query = `
      SELECT * FROM posts
      WHERE user_id = ?`;

    Post.query(query, [user_id], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(result.rows);
      }
    });
  },

  delete: (req, res) => {
    const { id } = req.params;
    const query = `
      DELETE FROM posts
      WHERE id = ?`;

    Post.query(query, [id], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        if (result.affectedRows > 0) {
          res.sendStatus(204);
        } else {
          res.status(404).json({ error: "Post not found" });
        }
      }
    });
  },

  deleteAllPostsForUser: (req, res) => {
    const { user_id } = req.params;
    const query = `
      DELETE FROM posts
      WHERE user_id = ?`;

    Post.query(query, [user_id], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.sendStatus(204);
      }
    });
  },
};

module.exports = postsControllers;
