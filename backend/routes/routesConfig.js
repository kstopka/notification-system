const meetingRoutes = require("./meetingRoutes");
const usersRoutes = require("./usersRoutes");
const postsRoutes = require("./postsRoutes");
const serviceProvidersRoutes = require("./serviceProvidersRoutes");
const lawsRoutes = require("./lawsRoutes");
const ticketsRoutes = require("./ticketsRoutes");
const postCommentsRoutes = require("./postCommentsRoutes");
const ticketCommentsRoutes = require("./ticketCommentsRoutes");
const votesRoutes = require("./votesRoutes");
const serviceRequestsRoutes = require("./serviceRequestsRoutes");
const postCommentsRelationsRoutes = require("./postCommentsRelationsRoutes");
const ticketCommentsRelationsRoutes = require("./ticketCommentsRelationsRoutes");

const configureRoutes = (app) => {
  app.use("/meetings", meetingRoutes);
  app.use("/users", usersRoutes);
  app.use("/posts", postsRoutes);
  app.use("/service_providers", serviceProvidersRoutes);
  app.use("/laws", lawsRoutes);
  app.use("/tickets", ticketsRoutes);
  app.use("/post_comments", postCommentsRoutes);
  app.use("/ticket_comments", ticketCommentsRoutes);
  app.use("/votes", votesRoutes);
  app.use("/service_requests", serviceRequestsRoutes);
  app.use("/post_comments_relations", postCommentsRelationsRoutes);
  app.use("/ticket_comments_relations", ticketCommentsRelationsRoutes);
};

module.exports = configureRoutes;
