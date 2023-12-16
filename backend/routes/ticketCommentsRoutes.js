const express = require("express");
const { checkToken } = require("../middleware");
const TicketComments = require("../endpoints/ticketComments");

const router = express.Router();

router.get("/get_ticket_comments/:id", (req, res) =>
  checkToken(req, res, () => TicketComments.getSingleTicketComments(req, res))
);

router.post("/update_ticket_comment/:id", (req, res) =>
  checkToken(req, res, () => TicketComments.updateSingleTicketComment(req, res))
);

router.post("/additional_ticket_comment", (req, res) =>
  checkToken(req, res, () =>
    TicketComments.additionalSingleTicketComment(req, res)
  )
);

router.delete("/delete_ticket_comment/:id", (req, res) =>
  checkToken(req, res, () =>
    TicketComments.deleteSingleTicketCommentByComment(req, res)
  )
);

module.exports = router;
