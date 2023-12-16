const db = require("../config/db");
const jwt = require("jsonwebtoken");
const { customDelete } = require("./utils");

class MeetingsClass {
  get = (res) =>
    db.query("SELECT * FROM `meetings`", (err, result) => {
      if (err) {
        if (err) throw err;
      }
      res.send(result);
    });

  add = (req, res) => {
    const { address, description, time, date } = req.body;

    db.query(
      `INSERT INTO meetings (address, description, time, date ) VALUES (?,?,?,?)`,
      [address, description, time, date],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };

  del = async (req, res) => {
    const id = req.params.id;
    customDelete("meetings", "meeting_id", id, (result) => res.send(result));
  };
}

const Meetings = new MeetingsClass();

module.exports = Meetings;
