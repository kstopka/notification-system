const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  // Header names in Express are auto-converted to lowercase
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  // Remove Bearer from string
  token = token.replace(/^Bearer\s+/, "");

  if (token) {
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        console.log("err 1", err);
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      }
      console.log("req 1", req);
      console.log("req.decoded 1", req.decoded);
      req.decoded = decoded;
      next();
    });
  } else {
    console.log("err 2", err);
    return res.json({
      success: false,
      message: "Token not provided",
    });
  }
};

module.exports = checkToken;
