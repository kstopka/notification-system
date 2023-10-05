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

const additionalSingleNews = (req, res) => {
  const { user_id, title, content } = req.body;
  const attachments = null;
  const created_at = new Date();
  const type = "news";
  const archive = null;

  db.query(
    "INSERT INTO `posts` (user_id, title, content, attachments, created_at, type, archive) VALUES (?,?,?,?,?,?,?)",
    [user_id, title, content, attachments, created_at, type, archive],
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
  additionalSingleNews,
  getTickets,
};
