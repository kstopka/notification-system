const db = require("./config/db");

const getSingleTicketComments = (req, res) => {
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

const updateSingleTicketComment = (req, res) => {
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

const additionalVotes = (req, res) => {
  const { user_id, post_id, vote_value } = req.body;
  const timestamp = new Date();

  db.query(
    "INSERT INTO `votes` (user_id, post_id, vote_value, timestamp) VALUES (?,?,?,?)",
    [user_id, post_id, vote_value, timestamp],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
};

const additionalSingleTicketComment = (req, res) => {
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

const additionalServiceRequest = (req, res) => {
  const { user_id, provider_id, description } = req.body;
  const request_date = new Date();
  const status = "Pending";

  db.query(
    "INSERT INTO `service_requests` (user_id, provider_id, request_date, description, status) VALUES (?,?,?,?,?)",
    [user_id, provider_id, request_date, description, status],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
};

const customDelete = (table, idName, id, handler) => {
  db.query(`DELETE FROM ${table} WHERE ${idName}= ?`, id, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    handler(result);
  });
};

const deleteSinglePostRelationsByPost = (req, res) => {
  const id = req.params.id;
  customDelete("post_comment_relations", "post_id", id, (result) =>
    res.send(result)
  );
};

const deleteSinglePostRelationsByComment = (req, res) => {
  const id = req.params.id;
  customDelete("post_comment_relations", "comment_id", id, (result) =>
    res.send(result)
  );
};

const deleteSingleTicketRelationsByComment = (req, res) => {
  const id = req.params.id;
  customDelete("ticket_comment_relations", "comment_id", id, (result) =>
    res.send(result)
  );
};
const deleteSingleTicketCommentByComment = (req, res) => {
  const id = req.params.id;
  customDelete("ticket_comments", "comment_id", id, (result) =>
    res.send(result)
  );
};

module.exports = {
  getSingleTicketComments,
  deleteSinglePostRelationsByPost,
  deleteSinglePostRelationsByComment,
  deleteSingleTicketRelationsByComment,
  deleteSingleTicketCommentByComment,
  additionalSingleTicketComment,
  updateSingleTicketComment,
  additionalServiceRequest,
  additionalVotes,
  customDelete,
};
