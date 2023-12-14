const db = require("../config/db");
const jwt = require("jsonwebtoken");

class MeetingsClass {
  getMeetings = (res) =>
    db.query("SELECT * FROM `meetings`", (err, result) => {
      if (err) {
        if (err) throw err;
      }
      res.send(result);
    });

  additionalMeeting = (req, res) => {
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

  deleteMeeting = async (req, res) => {
    const id = req.params.id;
    customDelete("meetings", "meeting_id", id, (result) => res.send(result));
  };
}

const Meetings = new MeetingsClass();

module.exports = Meetings;
