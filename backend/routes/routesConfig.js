const { checkToken } = require("../middleware");
const meetingRoutes = require("./meetingRoutes");
const usersRoutes = require("./usersRoutes");
const postsRoutes = require("./postsRoutes");
const serviceProvidersRoutes = require("./serviceProvidersRoutes");
const lawsRoutes = require("./lawsRoutes");
const ticketsRoutes = require("./ticketsRoutes");
const postCommentsRoutes = require("./postCommentsRoutes");
const ticketCommentsRoutes = require("./ticketCommentsRoutes");
const {
  deleteSinglePostRelationsByPost,
  deleteSinglePostRelationsByComment,
  deleteSingleTicketRelationsByComment,
  additionalServiceRequest,
  additionalVotes,
} = require("../dbEndpoints");

const configureRoutes = (app) => {
  app.use("/meetings", meetingRoutes);
  app.use("/users", usersRoutes);
  app.use("/posts", postsRoutes);
  app.use("/service_providers", serviceProvidersRoutes);
  app.use("/laws", lawsRoutes);
  app.use("/tickets", ticketsRoutes);
  app.use("/post_comments", postCommentsRoutes);
  app.use("/ticket_comments", ticketCommentsRoutes);

  //Refactor:

  app.post("/additional_votes", (req, res) =>
    checkToken(req, res, () => additionalVotes(req, res))
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
};

module.exports = configureRoutes;
