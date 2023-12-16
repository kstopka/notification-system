const db = require("../config/db");
const jwt = require("jsonwebtoken");
const { customDelete } = require("./utils");

class LawsClass {
  get = (res) =>
    db.query("SELECT * FROM `laws` ORDER BY date DESC", (err, result) => {
      if (err) {
        if (err) throw err;
      }

      res.send(result);
    });
}

const Laws = new LawsClass();

module.exports = Laws;
