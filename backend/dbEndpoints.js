const db = require("./config/db");
const jwt = require("jsonwebtoken");

const getUsers = (res) =>
  db.query("SELECT * FROM `users`", (err, result) => {
    if (err) {
      if (err) throw err;
    }
    res.send(result);
  });

const getNews = (res) =>
  db.query(
    "SELECT p.*, u.name AS user_name, COUNT(pcr.post_id) AS comment_count FROM posts AS p JOIN users AS u ON p.user_id = u.user_id LEFT JOIN post_comment_relations AS pcr ON p.post_id = pcr.post_id WHERE p.type = 'news' GROUP BY p.post_id, u.name ORDER BY p.created_at DESC",
    (err, result) => {
      if (err) {
        if (err) throw err;
      }

      res.send(result);
    }
  );
const getSingleNews = (req, res) => {
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
const getSingleTicket = (req, res) => {
  const id = req.params.id;
  db.query(
    // `SELECT t.*, u.name AS user_name FROM tickets t JOIN users u ON t.user_id = u.user_id WHERE t.ticket_id = ?`,
    `SELECT 
      t.*,
      u.name AS user_name,
      o.name AS owner_name
      FROM
      tickets t 
      JOIN
      users u ON t.user_id = u.user_id
      LEFT JOIN 
      users o ON t.owner_id = o.user_id
      WHERE t.ticket_id = ?`,
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

const getSingleNewsComments = (req, res) => {
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

const updateSingleNews = (req, res) => {
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

const updateSingleTicket = (req, res) => {
  const { priority, status, owner_id } = req.body;
  const id = req.params.id;
  console.log("update ticket");
  db.query(
    "UPDATE `tickets` SET `priority`= ? ,`status`= ?, `owner_id`= ?  WHERE ticket_id = ?",
    [priority, status, owner_id, id],
    (err, result) => {
      if (err) {
        if (err) throw err;
      }

      res.send(result);
    }
  );
};

const updateSingleComment = (req, res) => {
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

const additionalSingleNews = (req, res) => {
  const { user_id, title, content } = req.body;
  const attachments = null;
  const created_at = new Date();
  const type = "news";

  db.query(
    "INSERT INTO `posts` (user_id, title, content, attachments, created_at, type) VALUES (?,?,?,?,?,?)",
    [user_id, title, content, attachments, created_at, type],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
};

const additionalSingleComment = (req, res) => {
  const { user_id, post_id, content } = req.body;
  const created_at = new Date();
  console.log("sadasdsadsa");
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

const getTickets = (res) =>
  db.query(
    `SELECT t.*, u1.name AS user_name, u2.name AS owner_name, COUNT(tcr.ticket_id) AS comment_count FROM tickets AS t LEFT JOIN users AS u1 ON t.user_id = u1.user_id LEFT JOIN users AS u2 ON t.owner_id = u2.user_id LEFT JOIN ticket_comment_relations AS tcr ON t.ticket_id = tcr.ticket_id GROUP BY t.ticket_id, user_name, owner_name ORDER BY t.created_at DESC`,
    (err, result) => {
      if (err) {
        if (err) throw err;
      }

      res.send(result);
    }
  );

const additionalTicket = (req, res) => {
  const { user_id, subject, description } = req.body;
  const created_at = new Date();
  const priority = "niski";
  const status = "otwarte";
  const owner_id = 11;

  db.query(
    "INSERT INTO `tickets` (subject, description, priority, status, created_at, user_id, owner_id) VALUES (?,?,?,?,?,?,?)",
    [subject, description, priority, status, created_at, user_id, owner_id],
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

const deleteSinglePost = async (req, res) => {
  const id = req.params.id;
  customDelete("posts", "post_id", id, (result) => res.send(result));
};

const deleteSinglePostRelationsByPost = (req, res) => {
  const id = req.params.id;
  customDelete("post_comment_relations", "post_id", id, (result) =>
    res.send(result)
  );
};
const deleteSingleCommentByPost = (req, res) => {
  const id = req.params.id;
  customDelete("post_comments", "post_id", id, (result) => res.send(result));
};
const deleteSinglePostRelationsByComment = (req, res) => {
  const id = req.params.id;
  customDelete("post_comment_relations", "comment_id", id, (result) =>
    res.send(result)
  );
};
const deleteSingleCommentByComment = (req, res) => {
  const id = req.params.id;
  customDelete("post_comments", "comment_id", id, (result) => res.send(result));
};

const checkPermissions = (request, response) => {
  // Capture the input fields
  let email = request.body.email;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (email && password) {
    // Execute SQL query that'll select the account from the database based on the specified email and password
    db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.email = email;

          const user = results[0];
          const preparedUser = {
            id: user.user_id,
            userEmail: user.email,
            password: user.password,
          };

          const token = jwt.sign({ preparedUser }, "secretkey", {
            expiresIn: "1h",
          });

          response.send({
            ...results[0],
            token,
            message: "Zalogowano poprawnie",
          });
        } else {
          response.status(401).send("Błedny email lub hasło!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter email and Password!");
    response.end();
  }
};

module.exports = {
  checkPermissions,
  getUsers,
  getNews,
  updateSingleNews,
  updateSingleComment,
  additionalSingleNews,
  getTickets,
  additionalTicket,
  getSingleNews,
  getSingleTicket,
  getSingleNewsComments,
  getSingleTicketComments,
  additionalSingleComment,
  deleteSinglePost,
  deleteSinglePostRelationsByPost,
  deleteSingleCommentByPost,
  deleteSinglePostRelationsByComment,
  deleteSingleCommentByComment,
  updateSingleTicket,
};
