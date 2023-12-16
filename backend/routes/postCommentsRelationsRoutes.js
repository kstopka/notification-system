const express = require("express");
const { checkToken } = require("../middleware");
const PostCommentsRelations = require("../endpoints/postCommentsRelations");

const router = express.Router();

router.delete("/delete_post_relations/:id", (req, res) =>
  checkToken(req, res, () =>
    PostCommentsRelations.deleteSinglePostRelationsByPost(req, res)
  )
);

router.delete("/delete_comment_relations/:id", (req, res) =>
  checkToken(req, res, () =>
    PostCommentsRelations.deleteSinglePostRelationsByComment(req, res)
  )
);

module.exports = router;
