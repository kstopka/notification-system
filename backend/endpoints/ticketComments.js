const db = require("../config/db");
const { customDelete } = require("./utils");

class TcketCommentsClass {
  getSingleTicketComments = (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT tc.*, u.name AS user_name FROM ticket_comments tc JOIN users u ON tc.user_id = u.user_id JOIN ticket_comment_relations tcr ON tc.comment_id = tcr.comment_id WHERE tcr.ticket_id = ?
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

  updateSingleTicketComment = (req, res) => {
    const { comment_text } = req.body;
    const id = req.params.id;
    db.query(
      "UPDATE `ticket_comments` SET `comment_text`= ? WHERE comment_id = ?",
      [comment_text, id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };

  additionalSingleTicketComment = (req, res) => {
    const { user_id, ticket_id, comment_text } = req.body;
    const comment_date = new Date();
    db.query(
      "INSERT INTO `ticket_comments` (user_id, ticket_id, comment_text,  comment_date) VALUES (?,?,?,?)",
      [user_id, ticket_id, comment_text, comment_date],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };

  deleteSingleTicketCommentByComment = (req, res) => {
    const id = req.params.id;
    customDelete("ticket_comments", "comment_id", id, (result) =>
      res.send(result)
    );
  };
}

const TcketComments = new TcketCommentsClass();

module.exports = TcketComments;
