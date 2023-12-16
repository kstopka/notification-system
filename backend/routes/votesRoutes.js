const express = require("express");
const { checkToken } = require("../middleware");
const Votes = require("../endpoints/votes");

const router = express.Router();

router.post("/additional_votes", (req, res) =>
  checkToken(req, res, () => Votes.additionalVotes(req, res))
);

module.exports = router;
