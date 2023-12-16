const express = require("express");
const { checkToken } = require("../middleware");
const TicketCommentsRelations = require("../endpoints/ticketCommentsRelations");

const router = express.Router();

router.delete("/delete_ticket_comment_relations/:id", (req, res) =>
  checkToken(req, res, () =>
    TicketCommentsRelations.deleteSingleTicketRelationsByComment(req, res)
  )
);

module.exports = router;
