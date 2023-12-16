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

router.get("/get_news/:id", (req, res) =>
  checkToken(req, res, () => Posts.getSingleNews(req, res))
);

router.post("/update_news/:id", (req, res) =>
  checkToken(req, res, () => Posts.updateSingleNews(req, res))
);

router.post("/additional_news", (req, res) =>
  checkToken(req, res, () => Posts.additionalSingleNews(req, res))
);

router.delete("/delete_post/:id", (req, res) =>
  checkToken(req, res, () => Posts.deleteSinglePost(req, res))
);

module.exports = router;
