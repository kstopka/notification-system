const express = require("express");
const { checkToken } = require("../middleware");
const ServiceProviders = require("../endpoints/serviceProviders");

const router = express.Router();

router.get("/get", (req, res) =>
  checkToken(req, res, () => ServiceProviders.get(res))
);

module.exports = router;
