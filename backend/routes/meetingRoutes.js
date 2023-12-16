const express = require("express");
const { checkToken } = require("../middleware");
const Meetings = require("../endpoints/meetings");

const router = express.Router();

router.get("/get", (req, res) => {
  checkToken(req, res, () => Meetings.get(res));
});

router.post("/post", (req, res) =>
  checkToken(req, res, () => Meetings.add(req, res))
);

router.delete("/delete/:id", (req, res) =>
  checkToken(req, res, () => Meetings.del(req, res))
);

module.exports = router;
