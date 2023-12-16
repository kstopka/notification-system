const db = require("../config/db");
const { customDelete } = require("./utils");

class TicketCommentsRelationsClass {
  deleteSingleTicketRelationsByComment = (req, res) => {
    const id = req.params.id;
    customDelete("ticket_comment_relations", "comment_id", id, (result) =>
      res.send(result)
    );
  };
}

const TicketCommentsRelations = new TicketCommentsRelationsClass();

module.exports = TicketCommentsRelations;
