const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  token = token.replace(/^Bearer\s+/, "");

  if (token) {
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: "Token not provided",
    });
  }
};

module.exports = { checkToken };
