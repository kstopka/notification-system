const db = require("./config/db");
const { checkToken } = require("./middleware");
const {
  getSingleNews,
  getSingleTicket,
  getSingleLaw,
  updateSingleNews,
  updateSingleComment,
  additionalSingleNews,
  getTickets,
  additionalTicket,
  getSingleNewsComments,
  getSingleTicketComments,
  additionalSingleComment,
  deleteSinglePost,
  deleteSinglePostRelationsByPost,
  deleteSingleCommentByPost,
  deleteSinglePostRelationsByComment,
  deleteSingleCommentByComment,
  updateSingleTicket,
  deleteSingleTicketRelationsByComment,
  deleteSingleTicketCommentByComment,
  additionalSingleTicketComment,
  updateSingleTicketComment,
  additionalServiceRequest,
  additionalVotes,
  setSingleLaw,
  updateSingleLaw,
} = require("./dbEndpoints");
const meetingRoutes = require("./routes/meetingRoutes");
const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const serviceProvidersRoutes = require("./routes/serviceProvidersRoutes");
const lawsRoutes = require("./routes/lawsRoutes");
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

app.get("/get_news/:id", (req, res) =>
  checkToken(req, res, () => getSingleNews(req, res))
);
app.get("/get_ticket/:id", (req, res) =>
  checkToken(req, res, () => getSingleTicket(req, res))
);
app.get("/get_law/:id", (req, res) =>
  checkToken(req, res, () => getSingleLaw(req, res))
);
app.get("/get_comments/:id", (req, res) =>
  checkToken(req, res, () => getSingleNewsComments(req, res))
);
app.get("/get_ticket_comments/:id", (req, res) =>
  checkToken(req, res, () => getSingleTicketComments(req, res))
);

app.post("/update_news/:id", (req, res) =>
  checkToken(req, res, () => updateSingleNews(req, res))
);
app.patch("/patch_ticket/:id", (req, res) =>
  checkToken(req, res, () => updateSingleTicket(req, res))
);
app.patch("/patch_law/:id", (req, res) =>
  checkToken(req, res, () => updateSingleLaw(req, res))
);
app.post("/update_comment/:id", (req, res) =>
  checkToken(req, res, () => updateSingleComment(req, res))
);
app.post("/update_ticket_comment/:id", (req, res) =>
  checkToken(req, res, () => updateSingleTicketComment(req, res))
);
app.post("/additional_votes", (req, res) =>
  checkToken(req, res, () => additionalVotes(req, res))
);
app.post("/additional_news", (req, res) =>
  checkToken(req, res, () => additionalSingleNews(req, res))
);

app.post("/set_single_law", (req, res) =>
  checkToken(req, res, () => setSingleLaw(req, res))
);
app.post("/additional_comment", (req, res) =>
  checkToken(req, res, () => additionalSingleComment(req, res))
);
app.post("/additional_ticket_comment", (req, res) =>
  checkToken(req, res, () => additionalSingleTicketComment(req, res))
);

app.get("/get_tickets", (req, res) =>
  checkToken(req, res, () => getTickets(res))
);
app.post("/additional_ticket", (req, res) =>
  checkToken(req, res, () => additionalTicket(req, res))
);
app.post("/additional_service_request", (req, res) =>
  checkToken(req, res, () => additionalServiceRequest(req, res))
);

app.delete("/delete_post/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePost(req, res))
);
app.delete("/delete_post_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePostRelationsByPost(req, res))
);
app.delete("/delete_post_comment/:id", (req, res) =>
  checkToken(req, res, () => deleteSingleCommentByPost(req, res))
);
app.delete("/delete_comment_relations/:id", (req, res) =>
  checkToken(req, res, () => deleteSinglePostRelationsByComment(req, res))
);
app.delete("/delete_comment/:id", (req, res) =>
  checkToken(req, res, () => deleteSingleCommentByComment(req, res))
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
