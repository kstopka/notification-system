const db = require("../config/db");
const { customDelete } = require("./utils");

class ServiceProvidersClass {
  get = (res) =>
    db.query("SELECT * FROM `service_providers`", (err, result) => {
      if (err) {
        if (err) throw err;
      }
      res.send(result);
    });
}

const ServiceProviders = new ServiceProvidersClass();

module.exports = ServiceProviders;
