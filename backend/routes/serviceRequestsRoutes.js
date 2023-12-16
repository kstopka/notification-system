const express = require("express");
const { checkToken } = require("../middleware");
const ServiceRequests = require("../endpoints/serviceRequest");

const router = express.Router();

router.post("/additional_service_request", (req, res) =>
  checkToken(req, res, () => ServiceRequests.additionalServiceRequest(req, res))
);

module.exports = router;
