const express = require("express");
const { checkToken } = require("../middleware");
const Tickets = require("../endpoints/tickets");

const router = express.Router();

router.get("/get_tickets", (req, res) =>
  checkToken(req, res, () => Tickets.getTickets(res))
);

router.get("/get_ticket/:id", (req, res) =>
  checkToken(req, res, () => Tickets.getSingleTicket(req, res))
);

router.post("/additional_ticket", (req, res) =>
  checkToken(req, res, () => Tickets.additionalTicket(req, res))
);

router.patch("/patch_ticket/:id", (req, res) =>
  checkToken(req, res, () => Tickets.updateSingleTicket(req, res))
);

module.exports = router;
