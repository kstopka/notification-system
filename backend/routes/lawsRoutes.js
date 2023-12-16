const express = require("express");
const { checkToken } = require("../middleware");
const Laws = require("../endpoints/laws");

const router = express.Router();

router.get("/get", (req, res) => checkToken(req, res, () => Laws.get(res)));

module.exports = router;
