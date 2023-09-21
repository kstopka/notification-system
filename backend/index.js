const express = require("express");
const db = require("./config/db");
const checkToken = require("./middleware");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = 3002;
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.post("/auth", function (request, response) {
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
            id: user.id,
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
});

//Route to add new material
// app.post("/api/add_material", (req, res) => {
//   console.log("add_material");
//   const { nameMaterial, priceMaterial, unitMaterial } = req.body;

//   db.query(
//     "INSERT INTO `db.material` (nameMaterial, priceMaterial, unitMaterial) VALUES (?,?,?)",
//     [nameMaterial, priceMaterial, unitMaterial],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

app.get("/get_users", (req, res, next) => {
  console.log("get_users");
  // console.log("res", res.headers);

  checkToken(req, res, () => {
    db.query("SELECT * FROM `users`", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    });
  });
});

// //Route to add new parts
// app.post("/api/add_parts", (req, res) => {
//   console.log("add_parts");
//   const {
//     nameParts,
//     materialParts,
//     quintityMagazinParts,
//     quantityOrderParts,
//     quantityOccupiedParts,
//   } = req.body;

//   db.query(
//     "INSERT INTO `db.parts` (nameParts, materialParts, quintityMagazinParts, quantityOrderParts, quantityOccupiedParts) VALUES (?,?,?,?,?)",
//     [
//       nameParts,
//       materialParts,
//       quintityMagazinParts,
//       quantityOrderParts,
//       quantityOccupiedParts,
//     ],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// // Route to get all parts
// app.get("/api/get_parts", (req, res) => {
//   console.log("get_parts");
//   db.query("SELECT * FROM `db.parts`", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// // Route to delete parts

// app.delete("/api/del_parts/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("del_parts");
//   db.query("DELETE FROM `db.parts` WHERE idParts= ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// // Route for update part
// app.post("/api/update_part/:id", (req, res) => {
//   console.log("update_part");
//   const {
//     nameParts,
//     materialParts,
//     quintityMagazinParts,
//     quantityOrderParts,
//     quantityOccupiedParts,
//   } = req.body;

//   const id = req.params.id;

//   db.query(
//     "UPDATE `db.parts` SET `nameParts`= ? ,`materialParts`= ?,`quintityMagazinParts`= ?,`quantityOrderParts`= ?,`quantityOccupiedParts`= ? WHERE idParts = ?",
//     [
//       nameParts,
//       materialParts,
//       quintityMagazinParts,
//       quantityOrderParts,
//       quantityOccupiedParts,
//       id,
//     ],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// //EXAMPLES

// // Route to get one post
// app.get("/api/getFromId/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// // Route for creating the post
// app.post("/api/create", (req, res) => {
//   const username = req.body.userName;
//   const title = req.body.title;
//   const text = req.body.text;

//   console.log(username, title, text);

//   db.query(
//     "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
//     [title, text, username],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//     }
//   );
// });

// // Route for like
// app.post("/api/like/:id", (req, res) => {
//   const id = req.params.id;
//   db.query(
//     "UPDATE posts SET likes = likes + 1 WHERE id = ?",
//     id,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//     }
//   );
// });

// // Route to delete a post

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;

//   db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
