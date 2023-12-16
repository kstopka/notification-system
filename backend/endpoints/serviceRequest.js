const db = require("../config/db");
const { customDelete } = require("./utils");

class ServiceRequestsClass {
  additionalServiceRequest = (req, res) => {
    const { user_id, provider_id, description } = req.body;
    const request_date = new Date();
    const status = "Pending";

    db.query(
      "INSERT INTO `service_requests` (user_id, provider_id, request_date, description, status) VALUES (?,?,?,?,?)",
      [user_id, provider_id, request_date, description, status],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  };
}

const ServiceRequests = new ServiceRequestsClass();

module.exports = ServiceRequests;
