const db = require("./config/db");
const jwt = require("jsonwebtoken");

const getUsers = (res) =>
  db.query("SELECT * FROM `users`", (err, result) => {
    if (err) {
      if (err) throw err;
    }
    res.send(result);
  });

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

module.exports = { checkPermissions, getUsers };
