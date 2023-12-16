const express = require("express");
const { checkToken } = require("../middleware");
const PostComments = require("../endpoints/postComments");

const router = express.Router();

router.get("/get_comments/:id", (req, res) =>
  checkToken(req, res, () => PostComments.getSingleNewsComments(req, res))
);

router.post("/update_comment/:id", (req, res) =>
  checkToken(req, res, () => PostComments.updateSingleComment(req, res))
);

router.post("/additional_comment", (req, res) =>
  checkToken(req, res, () => PostComments.additionalSingleComment(req, res))
);

router.delete("/delete_post_comment/:id", (req, res) =>
  checkToken(req, res, () => PostComments.deleteSingleCommentByPost(req, res))
);

router.delete("/delete_comment/:id", (req, res) =>
  checkToken(req, res, () =>
    PostComments.deleteSingleCommentByComment(req, res)
  )
);

module.exports = router;
