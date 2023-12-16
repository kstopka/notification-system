const db = require("../config/db");
const { customDelete } = require("./utils");

class VotesClass {
  additionalVotes = (req, res) => {
    const { user_id, post_id, vote_value } = req.body;
    const timestamp = new Date();

    db.query(
      "INSERT INTO `votes` (user_id, post_id, vote_value, timestamp) VALUES (?,?,?,?)",
      [user_id, post_id, vote_value, timestamp],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };
}

const Votes = new VotesClass();

module.exports = Votes;
