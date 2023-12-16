const db = require("../config/db");
const { customDelete } = require("./utils");

class LawsClass {
  get = (res) =>
    db.query("SELECT * FROM `laws` ORDER BY date DESC", (err, result) => {
      if (err) {
        if (err) throw err;
      }

      res.send(result);
    });

  getSingleLaw = (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM laws WHERE law_id = ?`, [id], (err, result) => {
      if (err) {
        if (err) throw err;
      }
      res.send(result);
    });
  };

  updateSingleLaw = (req, res) => {
    const { status } = req.body;
    const id = req.params.id;
    db.query(
      "UPDATE `laws` SET `status`= ?  WHERE law_id = ?",
      [status, id],
      (err, result) => {
        if (err) {
          if (err) throw err;
        }

        res.send(result);
      }
    );
  };

  setSingleLaw = (req, res) => {
    const { name, description, text } = req.body;
    const status = "Pending";
    const date = new Date();

    db.query(
      "INSERT INTO `laws` (name, description, text, status, date) VALUES (?,?,?,?,?)",
      [name, description, text, status, date],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };
}

const Laws = new LawsClass();

module.exports = Laws;
