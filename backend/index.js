const express = require("express");
const db = require("./config/db");
const { checkToken } = require("./middleware");
const {
  getUsers,
  checkPermissions,
  getNews,
  getSingleNews,
  updateSingleNews,
  updateSingleComment,
  additionalSingleNews,
  getTickets,
  getSingleNewsComments,
  additionalSingleComment,
  deleteSinglePost,
  deleteSinglePostRelations,
  deleteSingleComment,
} = require("./dbEndpoints");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

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

app.post("/auth", (request, response) => checkPermissions(request, response));

app.get("/get_users", (req, res) => checkToken(req, res, () => getUsers(res)));

app.get("/get_news", (req, res) => checkToken(req, res, () => getNews(res)));

app.get("/get_news/:id", (req, res) =>
  checkToken(req, res, () => getSingleNews(req, res))
);
app.get("/get_comments/:id", (req, res) =>
  checkToken(req, res, () => getSingleNewsComments(req, res))
);

app.post("/update_news/:id", (req, res) =>
  checkToken(req, res, () => updateSingleNews(req, res))
);
app.post("/update_comment/:id", (req, res) =>
  checkToken(req, res, () => updateSingleComment(req, res))
);
app.post("/additional_news", (req, res) =>
  checkToken(req, res, () => additionalSingleNews(req, res))
);
app.post("/additional_comment", (req, res) =>
  checkToken(req, res, () => additionalSingleComment(req, res))
);

app.get("/get_tickets", (req, res) =>
  checkToken(req, res, () => getTickets(res))
);

app.delete("/delete_post/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePost(req, res))
);
app.delete("/delete_post_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePostRelations(req, res))
);
app.delete("/delete_post_comment/:id", (req, res) =>
  checkToken(req, res, () => deleteSingleComment(req, res))
);
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
