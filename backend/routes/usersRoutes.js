const express = require("express");
const { checkToken } = require("../middleware");
const Users = require("../endpoints/users");

const router = express.Router();

router.get("/get", (req, res) => {
  checkToken(req, res, () => Users.get(res));
});

router.post("/auth", (request, response) =>
  Users.checkPermissions(request, response)
);

module.exports = router;
