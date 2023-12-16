const db = require("../config/db");
const jwt = require("jsonwebtoken");
const { customDelete } = require("./utils");

class UsersClass {
  get = (res) =>
    db.query("SELECT * FROM `users`", (err, result) => {
      if (err) {
        if (err) throw err;
      }
      res.send(result);
    });

  checkPermissions = (request, response) => {
    let email = request.body.email;
    let password = request.body.password;
    if (email && password) {
      db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        function (error, results, fields) {
          if (error) throw error;
          if (results.length > 0) {
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
      response.send("Proszę wprowadzić email i hasło!");
      response.end();
    }
  };
}

const Users = new UsersClass();

module.exports = Users;
