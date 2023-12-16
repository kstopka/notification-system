const db = require("../config/db");

const { customDelete } = require("./utils");

class TicketsClass {
  getTickets = (res) =>
    db.query(
      `SELECT t.*, u1.name AS user_name, u2.name AS owner_name, COUNT(tcr.ticket_id) AS comment_count FROM tickets AS t LEFT JOIN users AS u1 ON t.user_id = u1.user_id LEFT JOIN users AS u2 ON t.owner_id = u2.user_id LEFT JOIN ticket_comment_relations AS tcr ON t.ticket_id = tcr.ticket_id GROUP BY t.ticket_id, user_name, owner_name ORDER BY t.created_at DESC`,
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );

  getSingleTicket = (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT 
        t.*,
        u.name AS user_name,
        o.name AS owner_name
        FROM
        tickets t 
        JOIN
        users u ON t.user_id = u.user_id
        LEFT JOIN 
        users o ON t.owner_id = o.user_id
        WHERE t.ticket_id = ?`,
      [id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }
        res.send(result);
      }
    );
  };

  additionalTicket = (req, res) => {
    const { user_id, subject, description } = req.body;
    const created_at = new Date();
    const priority = "niski";
    const status = "otwarte";
    const owner_id = 11;

    db.query(
      "INSERT INTO `tickets` (subject, description, priority, status, created_at, user_id, owner_id) VALUES (?,?,?,?,?,?,?)",
      [subject, description, priority, status, created_at, user_id, owner_id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };

  updateSingleTicket = (req, res) => {
    const { priority, status, owner_id } = req.body;
    const id = req.params.id;
    db.query(
      "UPDATE `tickets` SET `priority`= ? ,`status`= ?, `owner_id`= ?  WHERE ticket_id = ?",
      [priority, status, owner_id, id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };
}

const Tickets = new TicketsClass();

module.exports = Tickets;
