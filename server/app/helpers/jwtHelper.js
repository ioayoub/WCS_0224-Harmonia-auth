const jwt = require("jsonwebtoken");

const encodeJWT = async (payload) =>
  jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "24h" });

module.exports = { encodeJWT };
