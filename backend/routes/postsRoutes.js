const express = require("express");
const { checkToken } = require("../middleware");
const Posts = require("../endpoints/posts");

const router = express.Router();

router.get("/get_news", (req, res) =>
  checkToken(req, res, () => Posts.getNews(res))
);

router.get("/get_vote_law/:id", (req, res) =>
  checkToken(req, res, () => Posts.getVoteLaw(req, res))
);

module.exports = router;
