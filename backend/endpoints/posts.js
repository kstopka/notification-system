const db = require("../config/db");
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

  getSingleNews = (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT p.*, u.name AS user_name FROM posts p JOIN users u ON p.user_id = u.user_id WHERE p.post_id = ?`,
      [id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }
        // console.log("result", result);
        res.send(result);
      }
    );
  };

  updateSingleNews = (req, res) => {
    const { title, content } = req.body;
    const id = req.params.id;
    db.query(
      "UPDATE `posts` SET `title`= ? ,`content`= ? WHERE post_id = ?",
      [title, content, id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };

  additionalSingleNews = (req, res) => {
    const { user_id, title, content, type } = req.body;
    const attachments = null;
    const created_at = new Date();

    db.query(
      "INSERT INTO `posts` (user_id, title, content, attachments, created_at, type) VALUES (?,?,?,?,?,?)",
      [user_id, title, content, attachments, created_at, type],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({ ...result, message: "Poprawnie dodano" });
      }
    );
  };

  deleteSinglePost = async (req, res) => {
    const id = req.params.id;
    customDelete("posts", "post_id", id, (result) => res.send(result));
  };
}

const Posts = new PostsClass();

module.exports = Posts;
