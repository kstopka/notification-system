const db = require("./config/db");
const { checkToken } = require("./middleware");
const {
  getSingleTicketComments,

  deleteSinglePostRelationsByPost,

  deleteSinglePostRelationsByComment,

  deleteSingleTicketRelationsByComment,
  deleteSingleTicketCommentByComment,
  additionalSingleTicketComment,
  updateSingleTicketComment,
  additionalServiceRequest,
  additionalVotes,
} = require("./dbEndpoints");
const meetingRoutes = require("./routes/meetingRoutes");
const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const serviceProvidersRoutes = require("./routes/serviceProvidersRoutes");
const lawsRoutes = require("./routes/lawsRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes");
const postComments = require("./routes/postCommentsRoutes");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const express = require("express");
const app = express();
module.exports = app;

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

app.use("/meetings", meetingRoutes);

app.use("/users", usersRoutes);

app.use("/posts", postsRoutes);

app.use("/service_providers", serviceProvidersRoutes);

app.use("/laws", lawsRoutes);

app.use("/tickets", ticketsRoutes);

app.use("/post_comments", postComments);

//Refactor:

app.get("/get_ticket_comments/:id", (req, res) =>
  checkToken(req, res, () => getSingleTicketComments(req, res))
);

app.post("/update_ticket_comment/:id", (req, res) =>
  checkToken(req, res, () => updateSingleTicketComment(req, res))
);
app.post("/additional_votes", (req, res) =>
  checkToken(req, res, () => additionalVotes(req, res))
);

app.post("/additional_ticket_comment", (req, res) =>
  checkToken(req, res, () => additionalSingleTicketComment(req, res))
);

app.post("/additional_service_request", (req, res) =>
  checkToken(req, res, () => additionalServiceRequest(req, res))
);

app.delete("/delete_post_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePostRelationsByPost(req, res))
);

app.delete("/delete_comment_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePostRelationsByComment(req, res))
);

app.delete("/delete_ticket_comment_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSingleTicketRelationsByComment(req, res))
);
app.delete("/delete_ticket_comment/:id", (req, res) =>
  checkToken(req, res, () => deleteSingleTicketCommentByComment(req, res))
);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
