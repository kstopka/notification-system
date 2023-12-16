const db = require("./config/db");

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

module.exports = {
  deleteSinglePostRelationsByPost,
  deleteSinglePostRelationsByComment,
  deleteSingleTicketRelationsByComment,
  additionalServiceRequest,
  additionalVotes,
  customDelete,
};
