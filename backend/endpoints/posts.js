const db = require("../config/db");
const jwt = require("jsonwebtoken");
const { customDelete } = require("./utils");

class PostsClass {
  getNews = (res) =>
    db.query(
      "SELECT p.*, u.name AS user_name, COUNT(pcr.post_id) AS comment_count FROM posts AS p JOIN users AS u ON p.user_id = u.user_id LEFT JOIN post_comment_relations AS pcr ON p.post_id = pcr.post_id WHERE p.type = 'news' GROUP BY p.post_id, u.name ORDER BY p.created_at DESC",
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );

  getVoteLaw = (req, res) => {
    const id = req.params.id;

    db.query(
      `SELECT p.*
         FROM posts p
         LEFT JOIN votes v ON p.post_id = v.post_id AND v.user_id = ?
         WHERE p.type = 'laws'
         AND v.vote_id IS NULL
         ORDER BY p.created_at DESC;`,
      [id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };
}

const Posts = new PostsClass();

module.exports = Posts;
