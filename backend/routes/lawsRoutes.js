const express = require("express");
const { checkToken } = require("../middleware");
const Laws = require("../endpoints/laws");

const router = express.Router();

router.get("/get", (req, res) => checkToken(req, res, () => Laws.get(res)));

router.get("/get_law/:id", (req, res) =>
  checkToken(req, res, () => Laws.getSingleLaw(req, res))
);

router.patch("/patch_law/:id", (req, res) =>
  checkToken(req, res, () => Laws.updateSingleLaw(req, res))
);

router.post("/set_single_law", (req, res) =>
  checkToken(req, res, () => Laws.setSingleLaw(req, res))
);

module.exports = router;
