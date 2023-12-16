const db = require("../config/db");
const { customDelete } = require("./utils");

class PostCommentsRelationsClass {
  deleteSinglePostRelationsByPost = (req, res) => {
    const id = req.params.id;
    customDelete("post_comment_relations", "post_id", id, (result) =>
      res.send(result)
    );
  };

  deleteSinglePostRelationsByComment = (req, res) => {
    const id = req.params.id;
    customDelete("post_comment_relations", "comment_id", id, (result) =>
      res.send(result)
    );
  };
}

const PostCommentsRelations = new PostCommentsRelationsClass();

module.exports = PostCommentsRelations;
