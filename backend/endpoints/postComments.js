const db = require("../config/db");
const { customDelete } = require("./utils");

class PostCommentsClass {
  getSingleNewsComments = (req, res) => {
    console.log("getSingleNewsComments");
    const id = req.params.id;
    db.query(
      `SELECT pc.*, u.name AS user_name FROM post_comments pc JOIN users u ON pc.user_id = u.user_id JOIN post_comment_relations pcr ON pc.comment_id = pcr.comment_id WHERE pcr.post_id = ?
      `,
      [id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }
        res.send(result);
      }
    );
  };

  updateSingleComment = (req, res) => {
    const { content } = req.body;
    const id = req.params.id;
    db.query(
      "UPDATE `post_comments` SET `content`= ? WHERE comment_id = ?",
      [content, id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };

  additionalSingleComment = (req, res) => {
    const { user_id, post_id, content } = req.body;
    const created_at = new Date();
    console.log("additionalSingleComment");
    db.query(
      "INSERT INTO `post_comments` (user_id, post_id, content,  created_at) VALUES (?,?,?,?)",
      [user_id, post_id, content, created_at],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };

  deleteSingleCommentByPost = (req, res) => {
    const id = req.params.id;
    customDelete("post_comments", "post_id", id, (result) => res.send(result));
  };

  deleteSingleCommentByComment = (req, res) => {
    const id = req.params.id;
    customDelete("post_comments", "comment_id", id, (result) =>
      res.send(result)
    );
  };
}

const PostComments = new PostCommentsClass();

module.exports = PostComments;
